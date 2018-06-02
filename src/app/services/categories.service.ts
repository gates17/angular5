import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ICategory } from '../models/categories';

@Injectable()
export class CategoriesService {
  private _categoriesurl: string ="http://localhost:8000/categories/";
  constructor(private http: HttpClient) {  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this._categoriesurl);
  }
}