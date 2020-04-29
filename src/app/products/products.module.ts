import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { FeatureComponent } from './feature/feature.component';
import { SheetsComponent } from './sheets/sheets.component';
import { CoilsComponent } from './coils/coils.component';
import { SectionsComponent } from './sections/sections.component';
import { SteelComponent } from './steel/steel.component';
import { ChannelComponent } from './channel/channel.component';
import { PipeComponent } from './pipe/pipe.component';
import { AngleComponent } from './angle/angle.component';
import { FlatbarComponent } from './flatbar/flatbar.component';


@NgModule({
  declarations: [DetailComponent, ListComponent, FeatureComponent, SheetsComponent, CoilsComponent, SectionsComponent, SteelComponent, ChannelComponent, PipeComponent, AngleComponent, FlatbarComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ] ,
  exports:[
   FeatureComponent
  ]
})
export class ProductsModule { }
