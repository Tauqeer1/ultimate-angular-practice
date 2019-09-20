import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  model: User;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  constructor() {
    this.model = {
      email: '',
      password: ''
    };
  }

  ngOnInit() {}

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
