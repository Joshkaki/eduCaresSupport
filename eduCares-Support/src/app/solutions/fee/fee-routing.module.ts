import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeeHomeComponent } from './fee-home/fee-home.component';
import { FeeOneComponent } from './fee-one/fee-one.component';
import { FeeTwoComponent } from './fee-two/fee-two.component';
import { FeeThreeComponent } from './fee-three/fee-three.component';
import { FeeFourComponent } from './fee-four/fee-four.component';
import { FeeFiveComponent } from './fee-five/fee-five.component';
import { FeeSixComponent } from './fee-six/fee-six.component';
import { FeeSevenComponent } from './fee-seven/fee-seven.component';
import { FeeEightComponent } from './fee-eight/fee-eight.component';
import { FeeNineComponent } from './fee-nine/fee-nine.component';
import { FeeTenComponent } from './fee-ten/fee-ten.component';
import { FeeElevenComponent } from './fee-eleven/fee-eleven.component';
import { FeeTwelveComponent } from './fee-twelve/fee-twelve.component';
import { FeeThreetComponent } from './fee-threet/fee-threet.component';
import { FeeFourtComponent } from './fee-fourt/fee-fourt.component';
import { FeeFivetComponent } from './fee-fivet/fee-fivet.component';
import { FeeSixtComponent } from './fee-sixt/fee-sixt.component';
import { FeeSeventComponent } from './fee-sevent/fee-sevent.component';


const routes: Routes = [
  { path: '', component: FeeHomeComponent },
  { path: 'fee-home', component: FeeHomeComponent },
  { path: 'fee-1', component: FeeOneComponent },
  { path: 'fee-2', component: FeeTwoComponent },
  { path: 'fee-3', component: FeeThreeComponent },
  { path: 'fee-4', component: FeeFourComponent },
  { path: 'fee-5', component: FeeFiveComponent },
  { path: 'fee-6', component: FeeSixComponent },
  { path: 'fee-7', component: FeeSevenComponent },
  { path: 'fee-8', component: FeeEightComponent },
  { path: 'fee-9', component: FeeNineComponent },
  { path: 'fee-10', component: FeeTenComponent },
  { path: 'fee-11', component: FeeElevenComponent },
  { path: 'fee-12', component: FeeTwelveComponent },
  { path: 'fee-13', component: FeeThreetComponent },
  { path: 'fee-14', component: FeeFourtComponent },
  { path: 'fee-15', component: FeeFivetComponent },
  { path: 'fee-16', component: FeeSixtComponent },
  { path: 'fee-17', component: FeeSeventComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class FeeRoutingModule { }
