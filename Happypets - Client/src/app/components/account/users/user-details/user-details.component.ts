import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id: number;
  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data);
        this.user = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['user-list']);
  }
}
