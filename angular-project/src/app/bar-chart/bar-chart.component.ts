import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  builds: { buildnumber: string, duration: string }[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getJobDurations();
  }

  getJobDurations() {
    this.http.get<any[]>('http://localhost:8082/api/job-durations-by-time-range').subscribe(
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
}
