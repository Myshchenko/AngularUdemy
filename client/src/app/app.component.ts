import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private accountService: AccountService){

  }

  ngOnInit() {
    this.setCurrentUser();
  }

  // getUsers(){
  //   // in subscribe() we can say what we wanna do if in case of 200OK and error responce
  //   this.http.get('https://localhost:5001/api/users').subscribe(responce => {
  //     this.users = responce;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }
}
