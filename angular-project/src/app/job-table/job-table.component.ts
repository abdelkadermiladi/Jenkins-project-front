import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-table',
  templateUrl: './job-table.component.html',
  styleUrls: ['./job-table.component.css']
})
export class JobTableComponent implements OnInit {
  jobDescriptions: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchJobDescriptions();
  }

  fetchJobDescriptions() {
    this.http.get<any>('http://localhost:8082/api/last-job-build-description')
      .subscribe(
        data => {
          this.jobDescriptions = [data]; // Wrap the data in an array
        },
        error => {
          console.log('Error retrieving job descriptions:', error);
        }
      );
  }
}
