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
  cpwd: string;
   registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private elementRef: ElementRef,
    private userService: UserService,
    private router: Router
  ) {
  }


  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      firstName: ['', [
        Validators.required,
      ]],
      lastName: ['', [
        Validators.required,

      ]],
      email: ['', [
        Validators.required,
      ]],
      phone: ['', [
        Validators.required,
      ]],
      country: ['', [
        Validators.required,
      ]],
      address: ['', [
        Validators.required,
      ]],
    });
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  get country() {
    return this.registerForm.get('country');
  }
  get address() {
    return this.registerForm.get('address');
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

}
