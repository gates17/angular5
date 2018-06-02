import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoriesCreateService } from '../services/categories-create.service';
import { ICategory } from '../models/categories';

@Component({
  selector: 'app-categories-create',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.css']
})
export class CategoriesCreateComponent implements OnInit {

  category: string;
  categorySub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryCreateService: CategoriesCreateService
  ) { }

  ngOnInit() {
  }

  gotoList() {
    this.router.navigate(['/categories']);
  }

  createCategory(form: NgForm) {
    console.log(form.value)
    this.categoryCreateService.saveCategories(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}