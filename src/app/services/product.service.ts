import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from '../models/product';

@Injectable()
export class ProductService {

  private _producturl: string ="http://localhost:8000/product/";
  constructor(private http: HttpClient) {  }
  //private _product: <IProduct> ipdroduct;

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._producturl);
  }

  getProductByID(id: number){
    return this.http.get(this._producturl+id.toString());
  }

  removeProduct(id: number): Observable<IProduct>{
    if(id){
      return this.http.delete<IProduct>(this._producturl + 'delete/' + id +'/');
    }
    else{
      return this.http.get<IProduct>(this._producturl);
    }
  }

  saveProduct(product: any):Observable<any> {
    let result: Observable<Object>;
    if (product['url']){
     return this.http.put<IProduct>(product['url'],product);
    }
    else {
     return this.http.post<IProduct>(this._producturl,product);      
    }
  }
                 

} 