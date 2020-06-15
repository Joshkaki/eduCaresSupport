import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustrepHomeComponent } from './custrep-home/custrep-home.component';
import { CustrepOneComponent } from './custrep-one/custrep-one.component';
import { CustrepTwoComponent } from './custrep-two/custrep-two.component';
import { CustrepThreeComponent } from './custrep-three/custrep-three.component';
import { CustrepFourComponent } from './custrep-four/custrep-four.component';
import { CustrepFiveComponent } from './custrep-five/custrep-five.component';


const routes: Routes = [
  { path: '', component: CustrepHomeComponent },
  { path: 'custrep-home', component: CustrepHomeComponent },
  { path: 'custrep-1', component: CustrepOneComponent },
  { path: 'custrep-2', component: CustrepTwoComponent },
  { path: 'custrep-3', component: CustrepThreeComponent },
  { path: 'custrep-4', component: CustrepFourComponent },
  { path: 'custrep-5', component: CustrepFiveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustrepRoutingModule { }
