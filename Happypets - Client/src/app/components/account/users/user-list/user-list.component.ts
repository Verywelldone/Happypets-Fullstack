import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/user.model';
import {UserService} from '../../../../services/user.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Observable<User[]>;

  // users: User[] = [];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    // this.userService.getUserList().subscribe(users => {
    //   this.users = users;
    //   this.users.forEach(user => {
    //     console.log(user);
    //   });
    // });

    this.reloadData();
  }

  reloadData() {
    console.log(this.userService.getUserList().forEach(user => {
      console.log(user);
    }));
    this.users = this.userService.getUserList();
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

  userDetails(id: number) {
    this.router.navigate(['/details', id]).then(r => console.log('done'));
  }

}
