import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IShowcase } from '../models/showcase';

@Injectable()
export class ShowcaseService {

  private _producturl: string ="http://127.0.0.1:8000/product/";
  constructor(private http: HttpClient) {  }

  getShowcaseProducts(): Observable<IShowcase[]> {
    return this.http.get<IShowcase[]>(this._producturl);
  }
}