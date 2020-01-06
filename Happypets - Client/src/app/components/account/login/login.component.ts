import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private elementRef: ElementRef) {

  }


  loginEvent() {
    this.router.navigate(['/home']);
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url("background2.jpg")';
  }

  ngOnInit() {
  }

}
