import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoriesDetailsService } from '../services/categories-details.service';
import { ICategory } from '../models/categories';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.css']
})

export class CategoriesDetailsComponent implements OnInit {
 
  category: ICategory;
  categorySub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriesDetailsService: CategoriesDetailsService
  ) { }

  ngOnInit() {
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

  gotoList() {
    this.router.navigate(['/categories']);
  }
}