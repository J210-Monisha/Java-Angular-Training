import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
 username = '';
  password = '';

  constructor(private auth: Auth, private router: Router) {}

  login() {
    this.auth.login({ username: this.username, password: this.password }).subscribe(
      (token) => {
        this.auth.storeToken(token);
        this.router.navigate(['/home']);
      },
      (err) => alert('Invalid credentials')
    );
  }
}

