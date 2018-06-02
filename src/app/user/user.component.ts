import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  title = 'litosking';
  input;

  constructor(private userService: UserService ){}

  ngOnInit() {
    this.input = {
      username: "",
      password: "",
    }
  }
  loginUser() {
    this.userService.loginUser(this.input).subscribe(
      response => {
        alert('User ' + this.input.username + ' has logged in!')
      },
      error => console.log('error', error)
    );


  }
}
