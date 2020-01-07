import {Component, ElementRef, OnInit} from '@angular/core';
// @ts-ignore
import {UserService} from '../../../services/user.service';
import {User} from '../../model/user.model';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserDetails} from '../../model/user-details.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  userDetails: UserDetails = new UserDetails();
  submitted = false;
  confirmPassword: string;



  constructor(
    private elementRef: ElementRef,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.user.userDetails = this.userDetails;
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/login']);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );

  }
}
