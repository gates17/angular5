import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ICategory } from '../models/categories';

@Injectable()
export class CategoriesCreateService {
  private _categoriesurl: string ="http://localhost:8000/categories/";
  constructor(private http: HttpClient) {  }


  saveCategories(categories: any):Observable<any> {
    let result: Observable<Object>;
    console.log(categories)

    if (categories['url']){
      return this.http.get<ICategory>(this._categoriesurl);
    }
    else {
      return this.http.post<ICategory>(this._categoriesurl + 'create/',categories.value);      
    }

  }
}