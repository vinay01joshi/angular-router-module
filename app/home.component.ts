import { AuthService } from './auth.service';
import { Component } from '@angular/core';


@Component({
  template: `<h1>Home Page</h1>
  `
})
export class HomeComponent {
  constructor(authService : AuthService){
      authService.login("username","password");
  }
 }