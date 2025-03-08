import { Component, EventEmitter } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserInfoComponent } from '../user-info/user-info.component';
// import { UserListComponent } from '../user-list/user-list.component';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { trigger, state, style, transition, animate } from '@angular/animations';



  @Component({
  selector: 'app-header',
  standalone:true,
  imports:[
    // UserListComponent,
    UserInfoComponent,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    UserInfoComponent,
    MatProgressBarModule,
    MatListModule,
    MatCardModule,
    RouterModule,
    CommonModule,
    NgFor,
    NgIf
  ],
  animations: [
    trigger('transitionMessages', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in'))
    ])
  ],

  providers:[
    HttpClient,

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
users: any[] = [];
page: number = 1;
loading: boolean = false;

searchTerm:string='';

constructor(private userService: UserService,private router:Router){}

// onSearchChange(searchValue: string): void {
//   this.searchTerm = searchValue;
//   if (this.searchTerm) {
//     this.router.navigate(['/user', this.searchTerm]);
//   }
// }
onSearchChange(searchValue: string): void {
  if (searchValue) {
    this.userService.getUser(parseInt(searchValue, 10)).subscribe(data => {
      this.users = [data.data]; // Update the user list with the searched user
    }, error => {
      console.error('Error fetching user', error);
      this.users = []; // Clear the user list if there's an error
    });
  } else {
    this.loadUsers(); // Reload the default user list if search is cleared
  }
}
onUserClick(id: number): void {
  this.router.navigate(['user', id]);
}
loadUsers(): void {
  this.loading = true;
  this.userService.getUsers(this.page).subscribe(data => {
    this.users = data.data;
    this.loading = false;
  }, error => {
    console.error('Error fetching users', error);
    this.loading = false;
  });
}
ngOnInit(): void {
  this.loadUsers();
}
}
