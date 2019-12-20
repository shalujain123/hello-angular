import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:GlobalService,private router:Router) { 
    this.userDetails=service.loggedInUserData;
  }

  ngOnInit() {
  }
  userDetails={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    mobile:'',
    age:'',
    gender:'',
    country:'',
    image:''
  };
  openMenu=false;

  doLogOut(){
    this.router.navigate([""]);
    localStorage.removeItem("userDetails");
    console.log(JSON.parse(localStorage.getItem("userDetails")));

  }
}
