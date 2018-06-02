import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoriesUpdateService } from '../services/categories-update.service';
import { ICategory } from '../models/categories';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
 
  category: ICategory;
  categorySub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryUpdateService: CategoriesUpdateService
  ) { }

  ngOnInit() {
    this.categorySub = this.route.params.subscribe(params => {
      const id = params['id'];
      
      if (id) {
        this.categoryUpdateService.getCategory(id).subscribe((category: ICategory) => {
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

  save(form: NgForm) {
    this.categoryUpdateService.updateCategories(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}