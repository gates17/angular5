import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoriesRemoveService } from '../services/categories-remove.service';
import { ICategory } from '../models/categories';

@Component({
  selector: 'app-categories-remove',
  templateUrl: './categories-remove.component.html',
  styleUrls: ['./categories-remove.component.css']
})

export class CategoriesRemoveComponent implements OnInit, OnDestroy {
  category: ICategory;
  categorySub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriesRemoveService: CategoriesRemoveService
  ) { }

  ngOnInit() {
    this.categorySub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.categoriesRemoveService.getCategory(id).subscribe((category: ICategory) => {
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

  ngOnDestroy() {
    this.categorySub.unsubscribe();
  }
  gotoList() {
    this.router.navigate(['/categories']);
  }
  remove(id: number) {
    this.categoriesRemoveService.removeCategories(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}