import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
// @ts-ignore
import CountryList from '../../../../assets/countries.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit , AfterViewInit{

  countryName;

  constructor(private elementRef: ElementRef) {
    this.countryName = CountryList;
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url("background2.jpg")';
  }

  ngOnInit() {
  }

}
