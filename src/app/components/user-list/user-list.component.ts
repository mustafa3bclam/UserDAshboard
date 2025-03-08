// import { Component } from '@angular/core';
// import { UserService } from '../../services/user.service';
// import { Router } from '@angular/router';
// import { HeaderComponent } from '../header/header.component';
// import { UserInfoComponent } from '../user-info/user-info.component';
// import { MatProgressBarModule } from '@angular/material/progress-bar';

// import { MatListModule } from '@angular/material/list';
// import { MatCardModule } from '@angular/material/card';
// import { HttpClient } from '@angular/common/http';
// import { NgFor, NgIf } from '@angular/common';

// @Component({
//   selector: 'app-user-list',
//   standalone: true,
//   imports: [
//   HeaderComponent,
//   UserInfoComponent,
//   MatProgressBarModule,
//   MatListModule,
//   MatCardModule,
//   NgFor,
//   NgIf
// ],
// providers:[
//   HttpClient
// ],
//   templateUrl: './user-list.component.html',
//   styleUrl: './user-list.component.scss'
// })
// export class UserListComponent {
//   users: any[]=[];
//   page:number=1;
//   loading: boolean = false;
//   constructor(private userService: UserService, private router: Router) { }

//   ngOnInit(): void {
//     this.loadUsers();
//   }
//   loadUsers(): void {
//     this.userService.getUsers(this.page).subscribe(data => {
//       this.users = data.data;
//     });
//   }
//   onUserClick(id: number): void {
//     this.router.navigate(['/user', id]);
//   }
// }
