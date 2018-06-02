import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
//import { CommonModule } from '@angular/common';

//components
import { PromotionsComponent } from '../promotions/promotions.component';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';
import { ProductCrudComponent } from '../product-crud/product-crud.component';
import { ProductComponent } from '../product/product.component';
import { CategoriesComponent } from '../categories/categories.component';
import { CategoriesCreateComponent } from '../categories-create/categories-create.component';
import { CategoryUpdateComponent } from '../category-update/category-update.component';
import { CategoriesDetailsComponent } from '../categories-details/categories-details.component';
import { CategoriesRemoveComponent } from '../categories-remove/categories-remove.component';

//services
import { ProductService } from '../services/product.service';
import { CategoriesService } from '../services/categories.service';
import { CategoriesUpdateService } from '../services/categories-update.service';
import { CategoriesDetailsService } from '../services/categories-details.service';
import { CategoriesRemoveService } from '../services/categories-remove.service';
import { CategoriesCreateService } from '../services/categories-create.service';

const routes: Routes = [
  {path: 'products', component: ProductComponent },
  {path: 'product/add', component: ProductCrudComponent },
  {path: 'product/edit/:id', component: ProductCrudComponent },
  {path: '', component: HomeComponent },
  {path: 'login', component: UserComponent},
  {path: 'categories', component: CategoriesComponent },
  {path: 'categories/create', component: CategoriesCreateComponent },
  {path: 'categories/update/:id', component: CategoryUpdateComponent },
  {path: 'categories/details/:id', component: CategoriesDetailsComponent },
  {path: 'categories/remove/:id', component: CategoriesRemoveComponent },
  
];

@NgModule({
  
  imports: [
    [RouterModule.forRoot(routes)],
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ],
  exports:[
    RouterModule
  ],
  providers:[
    ProductService,
    CategoriesService,
    CategoriesCreateService,
    CategoriesUpdateService,
    CategoriesDetailsService,
    CategoriesRemoveService
  ],

})
export class AppRoutingModule { }
export const routingComponents = [
  CategoriesComponent,
  CategoriesCreateComponent,
  CategoriesDetailsComponent,
  CategoryUpdateComponent,
  CategoriesRemoveComponent,
  HomeComponent,
  ProductComponent,
  PromotionsComponent,
  ProductCrudComponent,
  UserComponent
]
