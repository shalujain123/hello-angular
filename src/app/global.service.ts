import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  courses=[];
  loggedInUser;
  loggedInUserData;
  isOpen=false;
  apiURL: string = 'http://localhost:9000';
  headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:9000');

  constructor(private httpClient: HttpClient,private router:Router) {
    
   }
  getCourses(){
    this.courses=["1,2,3"]
  }

  getUsersDeatils(data){
    console.log("Came");
    this.httpClient.get(this.apiURL+`/user/`+data.id,{headers:this.headers}).subscribe(
      (data: any[]) => {
        if (data) {
          this.loggedInUserData=data;
          console.log("print user" + data[0]);
        }else{  
         alert("No Users");
        }
      }
    )
  }


   

}
