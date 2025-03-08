import { Routes } from '@angular/router';
// import { UserListComponent } from './components/user-list/user-list.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  // { path: 'users', component: UserListComponent },
  { path: 'user/:id', component: UserInfoComponent }
];
export const appRoutes = provideRouter(routes);
