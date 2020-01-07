import {Component, ElementRef, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../model/user.model';
import {Router} from '@angular/router';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserDetails} from '../../model/user-details.model';
import {MustMatch} from './must-match.validator';

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
  private registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private elementRef: ElementRef,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [ Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      country: ['', [Validators.required]],
      address: ['', [Validators.required]],
      confirmPassword: ['', [ Validators.required]],

    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

  }


  save() {
    this.user.userDetails = this.userDetails;
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.gotoList();
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.submitted = true;
      this.save();
    }
  }

  gotoList() {
    this.router.navigate(['/login']);
  }

}
