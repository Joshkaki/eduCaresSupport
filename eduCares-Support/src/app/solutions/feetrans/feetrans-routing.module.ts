import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeeEighttComponent } from './fee-eightt/fee-eightt.component';
import { FeeNinetComponent } from './fee-ninet/fee-ninet.component';
import { FeeTwentyComponent } from './fee-twenty/fee-twenty.component';
import { FeeToneComponent } from './fee-tone/fee-tone.component';
import { FeeTtwoComponent } from './fee-ttwo/fee-ttwo.component';
import { FeeTthreeComponent } from './fee-tthree/fee-tthree.component';
import { FeeTfourComponent } from './fee-tfour/fee-tfour.component';
import { FeeTfiveComponent } from './fee-tfive/fee-tfive.component';
import { FeeTsixComponent } from './fee-tsix/fee-tsix.component';
import { FeeTsevenComponent } from './fee-tseven/fee-tseven.component';
import { FeeTeightComponent } from './fee-teight/fee-teight.component';
import { FeeTnineComponent } from './fee-tnine/fee-tnine.component';
import { FeeThirtyComponent } from './fee-thirty/fee-thirty.component';
import { FeeThirtyoneComponent } from './fee-thirtyone/fee-thirtyone.component';
import { FeeThirtytwoComponent } from './fee-thirtytwo/fee-thirtytwo.component';
import { FeeThirtythreeComponent } from './fee-thirtythree/fee-thirtythree.component';
import { FeeThirtyfourComponent } from './fee-thirtyfour/fee-thirtyfour.component';
import { FeeThirtyfiveComponent } from './fee-thirtyfive/fee-thirtyfive.component';
import { FeeThirtysixComponent } from './fee-thirtysix/fee-thirtysix.component';
import { FeeThirtysevenComponent } from './fee-thirtyseven/fee-thirtyseven.component';


const routes: Routes = [
  { path: 'fee-18', component: FeeEighttComponent },
  { path: 'fee-19', component: FeeNinetComponent },
  { path: 'fee-20', component: FeeTwentyComponent },
  { path: 'fee-21', component: FeeToneComponent },
  { path: 'fee-22', component: FeeTtwoComponent },
  { path: 'fee-23', component: FeeTthreeComponent },
  { path: 'fee-24', component: FeeTfourComponent },
  { path: 'fee-25', component: FeeTfiveComponent },
  { path: 'fee-26', component: FeeTsixComponent },
  { path: 'fee-27', component: FeeTsevenComponent },
  { path: 'fee-28', component: FeeTeightComponent },
  { path: 'fee-29', component: FeeTnineComponent },
  { path: 'fee-30', component: FeeThirtyComponent },
  { path: 'fee-31', component: FeeThirtyoneComponent },
  { path: 'fee-32', component: FeeThirtytwoComponent },
  { path: 'fee-33', component: FeeThirtythreeComponent },
  { path: 'fee-34', component: FeeThirtyfourComponent },
  { path: 'fee-35', component: FeeThirtyfiveComponent },
  { path: 'fee-36', component: FeeThirtysixComponent },
  { path: 'fee-37', component: FeeThirtysevenComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeetransRoutingModule { }
