import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { fade } from '../animation';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from '../global.service';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  animations : [
    fade
  ]
})
export class RegisterFormComponent implements OnInit{

  users={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    mobile:'',
    age:'',
    gender:'',
    country:''
  };

  apiURL: string = 'http://localhost:9000';
  headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  constructor(private httpClient: HttpClient,private service:GlobalService){}

  //@Output() onSignUp: EventEmitter<String> = new EventEmitter<String>();

  form=new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    mobile:new FormControl('',[Validators.required,Validators.minLength(10)]),
    age:new FormControl('',[Validators.required,Validators.minLength(2)]),
    gender:new FormControl('',Validators.required),
    country:new FormControl('')

  });
  // signUp(event,users,value){
  //   console.log("SignUp"+users);
  // this.onSignUp.emit(users);
  // }

  signUp(user: Object) {
    console.log("doSignUp" + user);
    this.httpClient.post(this.apiURL+`/signup`, user,{headers:this.headers}).subscribe(
      (data: any[]) => {
        if (data) {
          this.service.loggedInUser=data;
          console.log("print user" + data);
        }
      }
    )
  }

  isChecked = false;
  isRadio = true;
  oldPassword='';
  firstName:'';
  validForm=false;
  countries = [{ "id": 1, "name": "India" }, { "id": 2, "name": "US" }, { "id": 3, "name": "England" }];

  


  ngOnInit() {

  }
  getPassword(pwdObj) {
    console.log(pwdObj);
    this.oldPassword= pwdObj.value;
    console.log(this.oldPassword);
    console.log("value of"+this.validForm);
  }
  passwordMatch(conPwdObj){
    if(this.oldPassword==conPwdObj.value){
      return true;
    }else{
      return false;
    }
  }
  onChange($event) {
    console.log($event);
  }
  validationCheck(){
   console.log(this.firstName);
  }
  onClickSubmit(data) {
    console.log(data);
    alert("Entered Email id : " + data.emailid);
    console.log(this.firstName);
 }
}
