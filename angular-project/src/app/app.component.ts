import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {




  isAuthenticated: boolean = false; // Set the initial value of isAuthenticated to false

  handleAuthenticationSuccess() {
    this.isAuthenticated = true; // Update the value of isAuthenticated upon successful authentication
}
}