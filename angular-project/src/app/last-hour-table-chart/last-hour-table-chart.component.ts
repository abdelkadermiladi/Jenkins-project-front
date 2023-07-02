import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-hour-table-chart',
  templateUrl: './last-hour-table-chart.component.html',
  styleUrls: ['./last-hour-table-chart.component.css']
})

export class LastHourTableChartComponent implements OnInit {
  builds: { buildnumber: string, duration: string }[] = [];
  jobDescriptions: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getJobDurations();
    this.fetchJobDescriptions();
  }

  getJobDurations() {
    this.http.get<any[]>('http://localhost:8082/api/job-builds-last-hour').subscribe(
      response => {
        this.builds = response.map(item => ({ buildnumber: item.buildnumber, duration: item.duration }));
      },
      error => {
        console.error('Error fetching job durations:', error);
      }
    );
  }

  getBarWidth(duration: string) {
    const milliseconds = parseInt(duration.split(' ')[0]);
    const maxDuration = Math.max(...this.builds.map(build => parseInt(build.duration.split(' ')[0])));
    const maxWidth = 600; // Adjust this value to change the maximum bar width
    return (milliseconds / maxDuration) * maxWidth + 'px';
  }
  
  fetchJobDescriptions() {
    this.http.get<any>('http://localhost:8082/api/job-builds-last-hour')
      .subscribe(
        data => {
          this.jobDescriptions = data; // Assign the received data directly
        },
        error => {
          console.log('Error retrieving job descriptions:', error);
        }
      );
  }
}
