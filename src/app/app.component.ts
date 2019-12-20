import { Component, Injectable } from '@angular/core';
import { welcome } from './animation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlatformLocation } from '@angular/common';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationStart } from '@angular/router';
import { GlobalService } from './global.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    welcome
  ]
})
export class AppComponent {
  title = 'hello-angular4';
  courses = [{ "id": 1, "name": "course1" }, { "id": 2, "name": "course2" }, { "id": 3, "name": "course3" }];
  updatedName = '';
  isUpdate = false;
  currentUser = {};
  isOpen=false;


  ngOnInit() {
    window.onbeforeunload = function() { return "Your work will be lost."; };
  }

  constructor(private httpClient: HttpClient, location: PlatformLocation,private router: Router,private service:GlobalService) {
  
      let userId=JSON.parse(localStorage.getItem('userDetails'));
      if(userId || this.service.isOpen){
     this.service.getUsersDeatils(userId);} 
 
    }
   
  load() {
    location.reload();
  }

  getUrl() {
    return "url('https://mdbootstrap.com/img/Photos/Others/img%20(48).jpg')";
  }
  onAdd() {
    this.courses.push({ "id": 4, "name": "course4" });
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onUpdate(course) {
    console.log(this.updatedName);
    let index = this.courses.indexOf(course);
    this.courses[index].name = this.updatedName;
  }

}
