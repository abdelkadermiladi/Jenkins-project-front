import { HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  username: string = '';
  password: string = '';
  loginError: string | null = null;


 //@Output() authenticationSuccess = new EventEmitter<void>(); // Define an event to emit authentication success


  constructor(private http: HttpClient, 
    private router: Router,    
    private authService: AuthenticationService // Inject the AuthenticationService
  ) {}

  login() {
    const data = {
      username: this.username,
      password: this.password
    }

    this.http.post<any>('http://localhost:8081/app/api/authenticate', data).subscribe(
      (response) => {
        console.log('Authentication successful!');
        this.authService.isAuthenticated = true; // Update the authentication status in the service
        //this.authenticationSuccess.emit();
        this.router.navigateByUrl('/next-page');// Navigate to the next page after successful authentication
      
      },
      (error) => {
        console.log('Authentication failed!');
        // Authentication failed, handle the error and show an error message.
        this.loginError = 'Invalid username or password.';
        
        this.authService.isAuthenticated = false; // Update the authentication status in the service

      }
    );
  }
}
