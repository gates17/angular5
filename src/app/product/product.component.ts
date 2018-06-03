import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  public products = [];
  images: Array<string>;

  constructor(private _productService: ProductService, private _http: HttpClient) { }

  ngOnInit() {
    this._http.get('https://picsum.photos/list')
    .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
    .subscribe(images => this.images = images);

    this._productService.getProducts()
    .subscribe(data => this.products = data);
  }

  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/300/400?image=${randomId}`;
    });
  }
}
