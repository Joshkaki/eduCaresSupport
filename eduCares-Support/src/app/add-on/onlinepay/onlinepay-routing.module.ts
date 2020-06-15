import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlinepayHomeComponent } from './onlinepay-home/onlinepay-home.component';
import { OnlinepayOneComponent } from './onlinepay-one/onlinepay-one.component';
import { OnlinepayTwoComponent } from './onlinepay-two/onlinepay-two.component';
import { OnlinepayThreeComponent } from './onlinepay-three/onlinepay-three.component';


const routes: Routes = [
  { path: '', component: OnlinepayHomeComponent },
  { path: 'onlinepay-home', component: OnlinepayHomeComponent },
  { path: 'onlinepay-1', component: OnlinepayOneComponent },
  { path: 'onlinepay-2', component: OnlinepayTwoComponent },
  { path: 'onlinepay-3', component: OnlinepayThreeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlinepayRoutingModule { }
