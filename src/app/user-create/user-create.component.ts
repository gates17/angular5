import { Component, OnInit } from '@angular/core';
import { UserCreateService } from '../services/user-create.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  providers: [UserCreateService]
})
export class UserCreateComponent implements OnInit {
  title = 'litosking';
  register;

  constructor(private userCreateService: UserCreateService ){}

  ngOnInit() {
    this.register = {
      username: "",
      password: "",
      email: "",
    }
  }
  registerUser() {
    this.userCreateService.registerNewUser(this.register).subscribe(
      response => {
        alert('User ' + this.register.username + ' has been created!')
      },
      error => console.log('error', error)
    );


  }
}
