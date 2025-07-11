import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { BookList } from './components/book-list/book-list';
import { BookForm } from './components/book-form/book-form';
import { Home } from './home/home';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // default = login
  { path: 'login', component: Login},
  { path: 'home', component: Home, canActivate: [AuthGuard] },
  { path: 'books', component: BookList, canActivate: [AuthGuard] },
  { path: 'add', component: BookForm, canActivate: [AuthGuard] },
  { path: 'edit/:isbn', component: BookForm, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
