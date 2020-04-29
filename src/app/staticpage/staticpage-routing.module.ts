import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { ClientsComponent } from './clients/clients.component';
import { VideoComponent } from './video/video.component';
import { PageComponent } from './page/page.component';
// import { PageComponent } from './page/page.component';


const routes: Routes = [
 // {path:'page/:slug' , component:PageComponent } ,
  {path:'contact' , component:ContactusComponent } ,
  {path:'client' , component:ClientsComponent } ,
  {path:'video' , component:VideoComponent } ,
  {path:'page' , component:PageComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticpageRoutingModule { }
