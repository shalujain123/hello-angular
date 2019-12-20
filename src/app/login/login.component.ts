import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl,Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
 

  login={email:'',
  password:''};
  logInresult;
  is_login=false;
  apiURL: string = 'http://localhost:9000';
  headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:9000');

  constructor(private httpClient: HttpClient,private router: Router,private service:GlobalService){
    this.service.isOpen=false;
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.service.isOpen=false;
  }

  form=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),

  });

  doLogIn(loginDetails){
    this.httpClient.post(this.apiURL+`/login`,loginDetails,{headers:this.headers}).subscribe(
      (data: any[]) => {
        if (data["code"]==200) {
          this.service.loggedInUser=data;
          localStorage.setItem('userDetails',JSON.stringify(this.service.loggedInUser));
          this.service.getUsersDeatils(this.service.loggedInUser);
          this.router.navigate(['/allProfiles']);
          this.service.isOpen=true;
        }else{  
         alert("Wrong Details");
        }
      }
    )
  }

}
