import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpattHomeComponent } from './empatt-home/empatt-home.component';
import { EmpattOneComponent } from './empatt-one/empatt-one.component';
import { EmpattTwoComponent } from './empatt-two/empatt-two.component';
import { EmpattThreeComponent } from './empatt-three/empatt-three.component';
import { EmpattFourComponent } from './empatt-four/empatt-four.component';
import { EmpattFiveComponent } from './empatt-five/empatt-five.component';
import { EmpattSixComponent } from './empatt-six/empatt-six.component';
import { EmpattSevenComponent } from './empatt-seven/empatt-seven.component';
import { EmpattEightComponent } from './empatt-eight/empatt-eight.component';
import { EmpattNineComponent } from './empatt-nine/empatt-nine.component';
import { EmpattTenComponent } from './empatt-ten/empatt-ten.component';
import { EmpattElevenComponent } from './empatt-eleven/empatt-eleven.component';
import { EmpattTwelveComponent } from './empatt-twelve/empatt-twelve.component';
import { EmpattThirteenComponent } from './empatt-thirteen/empatt-thirteen.component';


const routes: Routes = [
  { path: '', component: EmpattHomeComponent },
  { path: 'empatt-home', component: EmpattHomeComponent },
  { path: 'empatt-1', component: EmpattOneComponent },
  { path: 'empatt-2', component: EmpattTwoComponent },
  { path: 'empatt-3', component: EmpattThreeComponent },
  { path: 'empatt-4', component: EmpattFourComponent },
  { path: 'empatt-5', component: EmpattFiveComponent },
  { path: 'empatt-6', component: EmpattSixComponent },
  { path: 'empatt-7', component: EmpattSevenComponent },
  { path: 'empatt-8', component: EmpattEightComponent },
  { path: 'empatt-9', component: EmpattNineComponent },
  { path: 'empatt-10', component: EmpattTenComponent },
  { path: 'empatt-11', component: EmpattElevenComponent },
  { path: 'empatt-12', component: EmpattTwelveComponent },
  { path: 'empatt-13', component: EmpattThirteenComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpattRoutingModule { }
