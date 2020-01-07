import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/user.model';
import {UserService} from '../../../../services/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  searchText: any;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.userService.getUserList().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  userDetails(userId: number) {
    this.router.navigate(['details', userId]);
  }

  updateUser(userId: number) {
    this.router.navigate(['update', userId]);
  }
}
