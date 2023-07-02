import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-job-table',
  templateUrl: './last-job-table.component.html',
  styleUrls: ['./last-job-table.component.css']
})
export class LastJobTableComponent implements OnInit {
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
