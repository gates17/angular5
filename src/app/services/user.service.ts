import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {  }

  loginUser(userData): Observable<any> {
    console.log(userData);
    alert(this.http.post('http://127.0.0.1:8000/teste/auth/', userData))
    return this.http.post('http://127.0.0.1:8000/teste/auth/', userData);
  }
}
