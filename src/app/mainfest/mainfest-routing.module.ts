import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{MainfestComponent} from './mainfest/mainfest.component';

const routes: Routes = [
  {path: 'mainfest', component: MainfestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainfestRoutingModule { }
