import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logedInUser={"id":1,"firstname":"Rohit","lastname":"Yadav","email":"rohityadav@gmail.com","mobile":"7878787788","age":25,"gender":"Male"};

}
