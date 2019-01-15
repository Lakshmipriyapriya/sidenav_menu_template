import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass: boolean;
  // toggle: boolean;

  loginData = {
    email: '',
    password: ''
  };
  text() {
    this.pass = ! this.pass;
    }

  constructor() {
    this.pass = false;
  }

  ngOnInit() {
  }

}
