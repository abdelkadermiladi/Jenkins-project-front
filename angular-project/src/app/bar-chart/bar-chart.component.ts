import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  chartData: number[] = [];
  chartLabels: string[] = [];
  chartColors: string[] = ['#2196F3', '#4CAF50', '#FFC107', '#9C27B0','#805FF9'];
  maxValue: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchJobDurationsByTimeRange();
  }

  fetchJobDurationsByTimeRange() {
    this.http.get<any>('http://localhost:8082/api/job-durations-by-time-range')
      .subscribe(
        data => {
          this.chartData = data.map((item: any) => item.duration);
          this.chartLabels = data.map((item: any) => item.buildnumber);
          this.maxValue = Math.max(...this.chartData);
        },
        error => {
          console.log('Error retrieving job durations by time range:', error);
        }
      );
  }
}
