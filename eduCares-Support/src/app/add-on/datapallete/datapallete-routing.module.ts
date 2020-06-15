import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatapalleteHomeComponent } from './datapallete-home/datapallete-home.component';
import { DatapalleteOneComponent } from './datapallete-one/datapallete-one.component';
import { DatapalleteTwoComponent } from './datapallete-two/datapallete-two.component';
import { DatapalleteThreeComponent } from './datapallete-three/datapallete-three.component';


const routes: Routes = [
  { path: '', component: DatapalleteHomeComponent },
  { path: 'datapallete-home', component: DatapalleteHomeComponent },
  { path: 'datapallete-1', component: DatapalleteOneComponent },
  { path: 'datapallete-2', component: DatapalleteTwoComponent },
  { path: 'datapallete-3', component: DatapalleteThreeComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatapalleteRoutingModule { }
