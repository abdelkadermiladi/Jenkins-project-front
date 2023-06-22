import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-table-range',
  templateUrl: './job-table-range.component.html',
  styleUrls: ['./job-table-range.component.css']
})
export class JobTableRangeComponent implements OnInit {



  jobDescriptions: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchJobDescriptions();
  }

  fetchJobDescriptions() {
    this.http.get<any>('http://localhost:8082/api/job-builds-by-time-range')
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
