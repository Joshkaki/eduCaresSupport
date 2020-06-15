import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomimpHomeComponent } from './customimp-home/customimp-home.component';
import { CustomimpOneComponent } from './customimp-one/customimp-one.component';
import { CustomimpTwoComponent } from './customimp-two/customimp-two.component';
import { CustomimpThreeComponent } from './customimp-three/customimp-three.component';
import { CustomimpFourComponent } from './customimp-four/customimp-four.component';
import { CustomimpFiveComponent } from './customimp-five/customimp-five.component';
import { CustomimpSixComponent } from './customimp-six/customimp-six.component';
import { CustomimpSevenComponent } from './customimp-seven/customimp-seven.component';
import { CustomimpEightComponent } from './customimp-eight/customimp-eight.component';


const routes: Routes = [
  { path: '', component: CustomimpHomeComponent },
  { path: 'customimp-home', component: CustomimpHomeComponent },
  { path: 'customimp-1', component: CustomimpOneComponent },
  { path: 'customimp-2', component: CustomimpTwoComponent },
  { path: 'customimp-3', component: CustomimpThreeComponent },
  { path: 'customimp-4', component: CustomimpFourComponent },
  { path: 'customimp-5', component: CustomimpFiveComponent },
  { path: 'customimp-6', component: CustomimpSixComponent },
  { path: 'customimp-7', component: CustomimpSevenComponent },
  { path: 'customimp-8', component: CustomimpEightComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomimpRoutingModule { }
