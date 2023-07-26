import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticatedUsername: string | null = null;
  isAuthenticated: boolean = false;

  constructor() { }
}
