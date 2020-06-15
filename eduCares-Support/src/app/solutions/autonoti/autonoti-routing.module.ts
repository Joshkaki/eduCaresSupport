import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutonotiHomeComponent } from './autonoti-home/autonoti-home.component';
import { AutonotiOneComponent } from './autonoti-one/autonoti-one.component';
import { AutonotiTwoComponent } from './autonoti-two/autonoti-two.component';
import { AutonotiThreeComponent } from './autonoti-three/autonoti-three.component';
import { AutonotiFourComponent } from './autonoti-four/autonoti-four.component';


const routes: Routes = [
  { path: '', component: AutonotiHomeComponent },
  { path: 'autonoti-home', component: AutonotiHomeComponent },
  { path: 'autonoti-1', component: AutonotiOneComponent },
  { path: 'autonoti-2', component: AutonotiTwoComponent },
  { path: 'autonoti-3', component: AutonotiThreeComponent },
  { path: 'autonoti-4', component: AutonotiFourComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutonotiRoutingModule { }
