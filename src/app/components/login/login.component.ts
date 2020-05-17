import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private snackbar: MatSnackBar) {}

  username: string;

  password: string;

  showSpinner: boolean;

  ngOnInit() {
    this.showSpinner = false;
  }

  login() {
    if (this.username === 'fokkifokki' && this.password === 'we') {
      this.router.navigate(['user']);
    } else {
      this.snackbar.open('Wrong credentials', 'damn', {
        duration: 2000,
      });
    }
  }
  register() {
      this.router.navigate(['registration']);
  }
}
