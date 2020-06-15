import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentHomeComponent } from './assignment-home/assignment-home.component';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './assignment-three/assignment-three.component';
import { AssignmentFourComponent } from './assignment-four/assignment-four.component';
import { AssignmentFiveComponent } from './assignment-five/assignment-five.component';
import { AssignmentSixComponent } from './assignment-six/assignment-six.component';
import { AssignmentSevenComponent } from './assignment-seven/assignment-seven.component';
import { AssignmentEightComponent } from './assignment-eight/assignment-eight.component';


const routes: Routes = [
  { path: '', component: AssignmentHomeComponent },
  { path: 'assignment-home', component: AssignmentHomeComponent },
  { path: 'assignment-1', component: AssignmentOneComponent },
  { path: 'assignment-2', component: AssignmentTwoComponent },
  { path: 'assignment-3', component: AssignmentThreeComponent },
  { path: 'assignment-4', component: AssignmentFourComponent },
  { path: 'assignment-5', component: AssignmentFiveComponent },
  { path: 'assignment-6', component: AssignmentSixComponent },
  { path: 'assignment-7', component: AssignmentSevenComponent },
  { path: 'assignment-8', component: AssignmentEightComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule { }
