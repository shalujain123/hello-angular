import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private httpClient: HttpClient,private service:GlobalService){
    this.getUsers();
  }
  @Input() onSignUp: EventEmitter<any> = new EventEmitter<any>();

  isFav=false;
  apiURL: string = 'http://localhost:9000';
  headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:9000');
  users=[];

makeFav(user){
user.favourite=!user.favourite;

}

firstChar(name) {
  console.log(name);
  if (name.firstName) {
    return name.firstName.charAt(0).toUpperCase();;
  }
}
getUsers(){
  console.log("users");
  this.httpClient.get(this.apiURL+`/allusers`,{headers:this.headers}).subscribe(
    (data: any[]) => {
      if (data.length>0) {
        this.users=data;
        this.service.isOpen=true;
        console.log("print user" + data[0]);
      }else{  
       alert("No Users");
      }
    }
  )
}


}
