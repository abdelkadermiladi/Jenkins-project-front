import { Component, OnInit } from '@angular/core';
//import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lastJobDuration!: string;

  //constructor(private apiService: ApiService) { }
  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    this.getLastJobDuration();
  }
  
  getLastJobDuration() {
    this.http.get<any>('http://localhost:8082/api/last-job-build').subscribe(
      (response: any) => {
        this.lastJobDuration = response.duration; 
      },
      (error: any) => {
        console.error('Error retrieving last job duration:', error);
      }
    );
  }
  
  

}
