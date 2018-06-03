import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoriesDetailsService } from '../services/categories-details.service';
import { ICategory } from '../models/categories';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.scss']
})

export class CategoriesDetailsComponent implements OnInit {
 
  category: ICategory;
  categorySub: Subscription;
  images: Array<string>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriesDetailsService: CategoriesDetailsService,
    private _http: HttpClient
  ) { }

  ngOnInit() {
    this._http.get('https://picsum.photos/list')
    .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
    .subscribe(images => this.images = images);

    this.categorySub = this.route.params.subscribe(params => {
      const id = params['id'];
      
      if (id) {
        this.categoriesDetailsService.getCategory(id).subscribe((category: ICategory) => {
          if (category) {
            this.category = category;
            this.category.url = category.url;
          } else {
            this.gotoList();
          }
        });
      }
    });
  }

  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }
  
  gotoList() {
    this.router.navigate(['/categories']);
  }
}