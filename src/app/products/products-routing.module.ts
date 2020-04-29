import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { SteelComponent } from './steel/steel.component';
import { SheetsComponent } from './sheets/sheets.component';
import { CoilsComponent } from './coils/coils.component';
import { SectionsComponent } from './sections/sections.component';
import { AngleComponent } from './angle/angle.component';
import { ChannelComponent } from './channel/channel.component';
import { FlatbarComponent } from './flatbar/flatbar.component';
import { PipeComponent } from './pipe/pipe.component';


const routes: Routes = [
  {path:'product' , component:ListComponent },
  {path:'product/:id' , component:DetailComponent },
  {path:'steel' , component:SteelComponent },
  {path:'sheet' , component:SheetsComponent },
  {path:'coil' , component:CoilsComponent },
  {path:'section' , component:SectionsComponent },
  {path:'angle' , component:AngleComponent },
  {path:'channel' , component:ChannelComponent },
  {path:'flatbar' , component:FlatbarComponent },
  {path:'pipe' , component:PipeComponent },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
