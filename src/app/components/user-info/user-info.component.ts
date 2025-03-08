import { Component , OnInit} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
// import { UserListComponent } from '../user-list/user-list.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    // HeaderComponent,
    // UserListComponent
  ],
  providers:[
    HttpClient
  ],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent {
  user: any;

  constructor(private route: ActivatedRoute,private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getUser(userId).subscribe(data => {
      this.user = data.data;
    });
  }

}

