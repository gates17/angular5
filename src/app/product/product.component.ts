import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  public products = [];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts()
    .subscribe(data => this.products = data);
  }

}
