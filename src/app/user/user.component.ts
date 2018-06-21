import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  title = 'litosking';
  input;
  loginForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder){}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
    
    this.input = {
      username: "",
      password: "",
    }
  }
  loginUser() {
    this.userService.loginUser(this.loginForm.value).subscribe(
      response => {
        alert('User ' + this.loginForm.value + ' has logged in!')
      },
      error => console.log('error', error)
    );


  }
}