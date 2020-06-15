import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrHomeComponent } from './hr-home/hr-home.component';
import { pathToFileURL } from 'url';
import { HrOneComponent } from './hr-one/hr-one.component';
import { HrTwoComponent } from './hr-two/hr-two.component';
import { HrThreeComponent } from './hr-three/hr-three.component';
import { HrFourComponent } from './hr-four/hr-four.component';
import { HrFiveComponent } from './hr-five/hr-five.component';
import { HrSixComponent } from './hr-six/hr-six.component';
import { HrSevenComponent } from './hr-seven/hr-seven.component';
import { HrEightComponent } from './hr-eight/hr-eight.component';
import { HrNineComponent } from './hr-nine/hr-nine.component';
import { HrTenComponent } from './hr-ten/hr-ten.component';
import { HrElevenComponent } from './hr-eleven/hr-eleven.component';
import { HrTwelveComponent } from './hr-twelve/hr-twelve.component';
import { HrFourtComponent } from './hr-fourt/hr-fourt.component';
import { HrFivetComponent } from './hr-fivet/hr-fivet.component';
import { HrSixtComponent } from './hr-sixt/hr-sixt.component';
import { HrSeventComponent } from './hr-sevent/hr-sevent.component';
import { HrEighttComponent } from './hr-eightt/hr-eightt.component';
import { HrNinetComponent } from './hr-ninet/hr-ninet.component';
import { HrTwentyComponent } from './hr-twenty/hr-twenty.component';
import { HrToneComponent } from './hr-tone/hr-tone.component';
import { HrTtwoComponent } from './hr-ttwo/hr-ttwo.component';
import { HrTthreeComponent } from './hr-tthree/hr-tthree.component';
import { HrTfourComponent } from './hr-tfour/hr-tfour.component';
import { HrTfiveComponent } from './hr-tfive/hr-tfive.component';
import { HrThreetComponent } from './hr-threet/hr-threet.component';


const routes: Routes = [
  { path: '', component: HrHomeComponent },
  { path: 'hr-home', component: HrHomeComponent },
  { path: 'hr-1', component: HrOneComponent },
  { path: 'hr-2', component: HrTwoComponent },
  { path: 'hr-3', component: HrThreeComponent },
  { path: 'hr-4', component: HrFourComponent },
  { path: 'hr-5', component: HrFiveComponent },
  { path: 'hr-6', component: HrSixComponent },
  { path: 'hr-7', component: HrSevenComponent },
  { path: 'hr-8', component: HrEightComponent },
  { path: 'hr-9', component: HrNineComponent },
  { path: 'hr-10', component: HrTenComponent },
  { path: 'hr-11', component: HrElevenComponent },
  { path: 'hr-12', component: HrTwelveComponent },
  { path: 'hr-13', component: HrThreetComponent },
  { path: 'hr-14', component: HrFourtComponent },
  { path: 'hr-15', component: HrFivetComponent },
  { path: 'hr-16', component: HrSixtComponent },
  { path: 'hr-17', component: HrSeventComponent },
  { path: 'hr-18', component: HrEighttComponent },
  { path: 'hr-19', component: HrNinetComponent },
  { path: 'hr-20', component: HrTwentyComponent },
  { path: 'hr-21', component: HrToneComponent },
  { path: 'hr-22', component: HrTtwoComponent },
  { path: 'hr-23', component: HrTthreeComponent },
  { path: 'hr-24', component: HrTfourComponent },
  { path: 'hr-25', component: HrTfiveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
