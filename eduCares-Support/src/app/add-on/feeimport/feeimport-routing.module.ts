import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeeimportHomeComponent } from './feeimport-home/feeimport-home.component';
import { FeeimportOneComponent } from './feeimport-one/feeimport-one.component';
import { FeeimportTwoComponent } from './feeimport-two/feeimport-two.component';
import { FeeimportThreeComponent } from './feeimport-three/feeimport-three.component';


const routes: Routes = [
  { path: '', component: FeeimportHomeComponent },
  { path: 'feeimport-home', component: FeeimportHomeComponent },
  { path: 'feeimport-1', component: FeeimportOneComponent },
  { path: 'feeimport-2', component: FeeimportTwoComponent },
  { path: 'feeimport-3', component: FeeimportThreeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeeimportRoutingModule { }
