import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnqregisHomeComponent } from './enqregis-home/enqregis-home.component';
import { EnqregisOneComponent } from './enqregis-one/enqregis-one.component';
import { EnqregisTwoComponent } from './enqregis-two/enqregis-two.component';
import { EnqregisThreeComponent } from './enqregis-three/enqregis-three.component';
import { EnqregisFourComponent } from './enqregis-four/enqregis-four.component';
import { EnqregisFiveComponent } from './enqregis-five/enqregis-five.component';
import { EnqregisSixComponent } from './enqregis-six/enqregis-six.component';
import { EnqregisSevenComponent } from './enqregis-seven/enqregis-seven.component';
import { EnqregisEightComponent } from './enqregis-eight/enqregis-eight.component';
import { EnqregisNineComponent } from './enqregis-nine/enqregis-nine.component';
import { EnqregisTenComponent } from './enqregis-ten/enqregis-ten.component';


const routes: Routes = [
  { path: '', component: EnqregisHomeComponent },
  { path: 'enqregis-home', component: EnqregisHomeComponent },
  { path: 'enqregis-1', component: EnqregisOneComponent },
  { path: 'enqregis-2', component: EnqregisTwoComponent },
  { path: 'enqregis-3', component: EnqregisThreeComponent },
  { path: 'enqregis-4', component: EnqregisFourComponent },
  { path: 'enqregis-5', component: EnqregisFiveComponent },
  { path: 'enqregis-6', component: EnqregisSixComponent },
  { path: 'enqregis-7', component: EnqregisSevenComponent },
  { path: 'enqregis-8', component: EnqregisEightComponent },
  { path: 'enqregis-9', component: EnqregisNineComponent },
  { path: 'enqregis-10', component: EnqregisTenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnqregisRoutingModule { }
