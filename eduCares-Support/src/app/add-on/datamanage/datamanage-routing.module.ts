import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatapalleteHomeComponent } from '../datapallete/datapallete-home/datapallete-home.component';
import { DatamanageHomeComponent } from './datamanage-home/datamanage-home.component';
import { DatamanageOneComponent } from './datamanage-one/datamanage-one.component';
import { DatamanageTwoComponent } from './datamanage-two/datamanage-two.component';
import { DatamanageThreeComponent } from './datamanage-three/datamanage-three.component';
import { DatamanageFourComponent } from './datamanage-four/datamanage-four.component';
import { DatamanageFiveComponent } from './datamanage-five/datamanage-five.component';


const routes: Routes = [
  { path: '', component: DatamanageHomeComponent },
  { path: 'datamanage-home', component: DatamanageHomeComponent },
  { path: 'datamanage-1', component: DatamanageOneComponent },
  { path: 'datamanage-2', component: DatamanageTwoComponent },
  { path: 'datamanage-3', component: DatamanageThreeComponent },
  { path: 'datamanage-4', component: DatamanageFourComponent },
  { path: 'datamanage-5', component: DatamanageFiveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatamanageRoutingModule { }
