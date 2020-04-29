import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticpageRoutingModule } from './staticpage-routing.module';
import { PageComponent } from "./page/page.component";
import { ContactusComponent } from './contactus/contactus.component';
import { ClientsComponent } from './clients/clients.component';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [PageComponent, ContactusComponent, ClientsComponent, VideoComponent ],
  imports: [
    CommonModule,
    StaticpageRoutingModule
  ]
})
export class StaticpageModule { }
