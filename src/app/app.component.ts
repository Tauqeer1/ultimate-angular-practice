import { User } from './auth-form/auth-form.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rememberMe = false;
  createUser(user: User) {
    console.log('create account', user);
  }

  loginUser(user: User) {
    console.log('login user', user);
  }

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }
}
