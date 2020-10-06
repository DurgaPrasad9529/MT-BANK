import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainfestRoutingModule } from './mainfest-routing.module';
import { MainfestComponent } from './mainfest/mainfest.component';


@NgModule({
  declarations: [MainfestComponent],
  imports: [
    CommonModule,
    MainfestRoutingModule
  ]
})
export class MainfestModule { }
