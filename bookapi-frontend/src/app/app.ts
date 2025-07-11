import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'bookapi-frontend';

  constructor(private router: Router) {}

  confirmLogout() {
    const confirmLogout = confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      localStorage.removeItem('jwt');
      this.router.navigate(['/login']);
    }
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
