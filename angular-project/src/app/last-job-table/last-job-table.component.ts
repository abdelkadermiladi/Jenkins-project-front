import { HttpClient} from '@angular/common/http';
import { Component} from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-last-job-table',
  templateUrl: './last-job-table.component.html',
  styleUrls: ['./last-job-table.component.css']
})
export class LastJobTableComponent {

  jobDescriptions: any[] = [];

  constructor(private http: HttpClient,
    private authService: AuthenticationService // Inject the AuthenticationService
    ) {}

    ngOnInit() {
      this.fetchJobDescriptions();
    }

  fetchJobDescriptions() {
    if (this.authService.isAuthenticated) {
      console.log("Last Job Component: authenticated !");
    this.http.get<any>('http://localhost:8081/app/api/last-job-build-description')
      .subscribe(
        data => {
          this.jobDescriptions = [data]; // Wrap the data in an array
          
        },
        error => {
          console.log('Error retrieving job descriptions:', error);
       }
      );
  }
  else{
  console.log("Last Job Component: Not authenticated !");
}
}
}
