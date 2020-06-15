import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacementHomeComponent } from './placement-home/placement-home.component';
import { PlacementOneComponent } from './placement-one/placement-one.component';
import { PlacementTwoComponent } from './placement-two/placement-two.component';
import { PlacementThreeComponent } from './placement-three/placement-three.component';
import { PlacementFourComponent } from './placement-four/placement-four.component';
import { PlacementFiveComponent } from './placement-five/placement-five.component';
import { PlacementSixComponent } from './placement-six/placement-six.component';
import { PlacementSevenComponent } from './placement-seven/placement-seven.component';
import { PlacementEightComponent } from './placement-eight/placement-eight.component';


const routes: Routes = [
  { path: '', component: PlacementHomeComponent },
  { path: 'placement', component: PlacementHomeComponent },
  { path: 'placement-1', component: PlacementOneComponent },
  { path: 'placement-2', component: PlacementTwoComponent },
  { path: 'placement-3', component: PlacementThreeComponent },
  { path: 'placement-4', component: PlacementFourComponent },
  { path: 'placement-5', component: PlacementFiveComponent },
  { path: 'placement-6', component: PlacementSixComponent },
  { path: 'placement-7', component: PlacementSevenComponent },
  { path: 'placement-8', component: PlacementEightComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacementRoutingModule { }
