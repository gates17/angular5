import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule, routingComponents } from './approuting/approuting.module';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
//import { CommonModule } from '@angular/common';

//COMPONENTS
import { AppComponent } from './app.component';
import { CarouselConfigComponent } from './carousel-config/carousel-config.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselConfigComponent,
    NavbarComponent,
    ShowcaseComponent,
    FooterComponent,
    routingComponents,
    UserComponent,
    HomeComponent,
    ContactComponent,
    ProductCrudComponent,
    UserCreateComponent,
    DashboardComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule ,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    
  ],
  exports:[

  ],
  providers: [],
  bootstrap: [
    AppComponent, 
    NavbarComponent,
    FooterComponent
  ]
  
})
export class AppModule { }
