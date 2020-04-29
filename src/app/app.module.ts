import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ErrorHandler  } from '@angular/core';
import '@angular/compiler';
import {ProductsModule} from './products/products.module';
import {StaticpageModule} from './staticpage/staticpage.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './page/clients/clients.component';
import { EmployeeserviceService } from './authen/employeeservice.service';
//import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientModule , HttpClient} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    PageNotFoundComponent,
    AboutComponent,
    ClientsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClient,
        ProductsModule,
    StaticpageModule,
    AppRoutingModule,

  ],
  providers: [EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
