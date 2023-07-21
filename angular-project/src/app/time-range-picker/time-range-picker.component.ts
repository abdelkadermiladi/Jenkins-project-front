import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-time-range-picker',
  templateUrl: './time-range-picker.component.html',
  styleUrls: ['./time-range-picker.component.css']
})
export class TimeRangePickerComponent implements OnInit {

  nodeNames!: string[];
  selectedNode!: string;

  startTime!: string;
  endTime!: string;

  jobBuilds: any[] = [];
  builds: { jobname: string, buildnumber: string, duration: string }[] = [];

  DisplayTable: boolean = false;
  showNoJobMessage: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getNodes();
  }

  //Retrieve all the Nodes name from Jenkins
  getNodes() {
    this.http.get<any[]>('http://localhost:8081/app/api/nodeNames').subscribe(
      (response: string[]) => {
        this.nodeNames = response;
      },
      (error) => {
        console.error('Error retrieving node names:', error);
      }
    );
  }

  submitForm() {
    const startDate = new Date(this.startTime);
    const endDate = new Date(this.endTime);

    const formattedStartDate = startDate.toISOString().slice(0, 16);
    const formattedEndDate = endDate.toISOString().slice(0, 16);

    const dateData = {
      startTime: formattedStartDate,
      endTime: formattedEndDate,
      selectedNode: this.selectedNode
    };

    this.http.post<any[]>('http://localhost:8081/app/api/job-builds-by-time-range-picker', dateData)
      .subscribe(
        (response) => {
          console.log('Server response:', response);
          this.jobBuilds = response;
          this.builds = response.map(item => ({
            jobname: item.jobname,
            buildnumber: item.buildnumber,
            duration: item.duration,
          }));

          // Sort the jobBuilds array based on the startdate
          this.jobBuilds.sort(this.compareJobBuilds);
          this.DisplayTable = true;
          this.showNoJobMessage = this.jobBuilds.length === 0;
        },
        (error) => {
          console.error('Error while submitting the form:', error);
        }
      );
  }

  // Custom comparator function to compare job builds based on startdate
  compareJobBuilds(a: any, b: any) {
    const startDateA = new Date(a.date).getTime();
    const startDateB = new Date(b.date).getTime();
    return startDateA - startDateB;
  }

  //For Job Duration Visualization
  getBarWidth(duration: string) {
    const milliseconds = parseInt(duration.split(' ')[0]);
    const maxDuration = Math.max(...this.builds.map(build => parseInt(build.duration.split(' ')[0])));
    const maxWidth = 600; // Adjust this value to change the maximum bar width
    return (milliseconds / maxDuration) * maxWidth + 'px';
  }

  downloadReport() {
    const csvData = this.convertToCSV(this.jobBuilds);
    const blob = new Blob([csvData], { type: 'text/csv' });
  
    // Create a temporary anchor element and set the download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'job_report.csv';
  
    // Trigger a click on the anchor element to start the download
    link.click();
  
    // Clean up the temporary anchor element and the URL object
    URL.revokeObjectURL(link.href);
  }
  
  convertToCSV(data: any[]): string {
    const csvHeader = ['Job Name', 'Job Status', 'Build Number', 'Start date', 'Duration', 'End date', 'Queuing Duration', 'ExecutionDate'];
    const csvRows = [csvHeader.join(',')];
  
    data.forEach((item) => {
      const row = [
        item.jobname,
        item.jobStatus,
        item.buildnumber,
        item.date,
        item.duration,
        item.TheEndTime,
        item.queuingDuration,
        item.ExecutionDate
      ];
      csvRows.push(row.join(','));
    });
  
    return csvRows.join('\n');
  }
}
