import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../services/user.service';
import {User} from '../../../model/user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userID: number;
  user: User;


  @Input() submitted: string;

  constructor(private route: ActivatedRoute, private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    this.user = new User();
    this.userID = this.route.snapshot.params.id;

    this.userService.getUser(this.userID)
      .subscribe(data => {
        console.log(data);
        this.user = data;
      }, error => console.log(error));
  }

  updateUser() {
    this.userService.updateUser(this.userID, this.user)
      .subscribe(data => {
        console.log(data);
        });
  }

  onSubmit() {
    this.updateUser();
  }

  gotoList() {
    this.router.navigate(['/user-list']);
  }

   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );

  }

}
