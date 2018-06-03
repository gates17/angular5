import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service'
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CategoriesService]
})
export class CategoriesComponent implements OnInit {

  public categories = [];
  images: Array<string>;

  constructor(private _categoriesService: CategoriesService, private _http: HttpClient) { }

  ngOnInit() {
    this._http.get('https://picsum.photos/list')
    .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
    .subscribe(images => this.images = images);

    this._categoriesService.getCategories()
    .subscribe(data => this.categories = data);
  }

  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/300/400?image=${randomId}`;
    });
  }
}