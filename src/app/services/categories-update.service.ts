import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ICategory } from '../models/categories';

@Injectable()
export class CategoriesUpdateService {
  private _categoriesurl: string ="http://localhost:8000/categories/";
  constructor(private http: HttpClient) {  }

  getCategory(categories_id: any):Observable<any>{
    if (categories_id) {
      return this.http.get<ICategory>(this._categoriesurl + 'detail/' + categories_id )
    }
    else {
      return this.http.get<ICategory>(this._categoriesurl);
    }
  }

  updateCategories(categories: any):Observable<any> {
    if (categories['url']){
      return this.http.put(categories['url'] + 'update/' + categories['id'] + '/',categories)
    }
    else {
      return this.http.get<ICategory[]>(this._categoriesurl);
    }
  }
}