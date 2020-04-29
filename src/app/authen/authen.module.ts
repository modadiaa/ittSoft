import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenRoutingModule } from './authen-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [RegistrationComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthenRoutingModule
  ]
})
export class AuthenModule { }
