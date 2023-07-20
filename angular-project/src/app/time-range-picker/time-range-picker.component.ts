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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getNodes();
  }

  getNodes() {
    this.http.get<any[]>('http://localhost:8082/api/nodeNames').subscribe(
      (response: string[]) => {
        this.nodeNames = response;
      },
      (error) => {
        console.error('Error retrieving node names:', error);
      }
    );
  }

  // onNodeSelectionChange() {
  //   // Handle the selected node change here
  //   console.log('Selected node:', this.selectedNode);
  // }

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
          this.builds = response.map(item => ({ jobname: item.jobname, buildnumber: item.buildnumber, duration: item.duration }));
          this.DisplayTable = true;
        },
        (error) => {
          console.error('Error while submitting the form:', error);
        }
      );
  }

  getBarWidth(duration: string) {
    const milliseconds = parseInt(duration.split(' ')[0]);
    const maxDuration = Math.max(...this.builds.map(build => parseInt(build.duration.split(' ')[0])));
    const maxWidth = 600; // Adjust this value to change the maximum bar width
    return (milliseconds / maxDuration) * maxWidth + 'px';
  }
}
