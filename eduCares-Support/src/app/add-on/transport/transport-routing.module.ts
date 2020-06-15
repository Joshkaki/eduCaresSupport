import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportHomeComponent } from './transport-home/transport-home.component';
import { TransportOneComponent } from './transport-one/transport-one.component';
import { TransportTwoComponent } from './transport-two/transport-two.component';
import { TransportThreeComponent } from './transport-three/transport-three.component';
import { TransportFourComponent } from './transport-four/transport-four.component';
import { TransportFiveComponent } from './transport-five/transport-five.component';
import { TransportSixComponent } from './transport-six/transport-six.component';
import { TransportSevenComponent } from './transport-seven/transport-seven.component';
import { TransportEightComponent } from './transport-eight/transport-eight.component';
import { TransportNineComponent } from './transport-nine/transport-nine.component';
import { TransportTenComponent } from './transport-ten/transport-ten.component';
import { TransportElevenComponent } from './transport-eleven/transport-eleven.component';
import { TransportTwelveComponent } from './transport-twelve/transport-twelve.component';
import { TransportThreetComponent } from './transport-threet/transport-threet.component';
import { TransportFourtComponent } from './transport-fourt/transport-fourt.component';
import { TransportFivetComponent } from './transport-fivet/transport-fivet.component';
import { TransportSixtComponent } from './transport-sixt/transport-sixt.component';
import { TransportSeventComponent } from './transport-sevent/transport-sevent.component';
import { TransportNinetComponent } from './transport-ninet/transport-ninet.component';
import { TransportTwentyComponent } from './transport-twenty/transport-twenty.component';
import { TransportToneComponent } from './transport-tone/transport-tone.component';
import { TransportTtwoComponent } from './transport-ttwo/transport-ttwo.component';
import { TransportTthreeComponent } from './transport-tthree/transport-tthree.component';
import { TransportTfourComponent } from './transport-tfour/transport-tfour.component';
import { TransportTfiveComponent } from './transport-tfive/transport-tfive.component';
import { TransportTsixComponent } from './transport-tsix/transport-tsix.component';
import { TransportTsevenComponent } from './transport-tseven/transport-tseven.component';
import { TransportTeightComponent } from './transport-teight/transport-teight.component';
import { TransportTnineComponent } from './transport-tnine/transport-tnine.component';
import { TransportThirtyComponent } from './transport-thirty/transport-thirty.component';
import { TransportThreeoneComponent } from './transport-threeone/transport-threeone.component';
import { TransportEighttComponent } from './transport-eightt/transport-eightt.component';


const routes: Routes = [
  { path: '', component: TransportHomeComponent },
  { path: 'transport-home', component: TransportHomeComponent },
  { path: 'transport-1', component: TransportOneComponent },
  { path: 'transport-2', component: TransportTwoComponent },
  { path: 'transport-3', component: TransportThreeComponent },
  { path: 'transport-4', component: TransportFourComponent },
  { path: 'transport-5', component: TransportFiveComponent },
  { path: 'transport-6', component: TransportSixComponent },
  { path: 'transport-7', component: TransportSevenComponent },
  { path: 'transport-8', component: TransportEightComponent },
  { path: 'transport-9', component: TransportNineComponent },
  { path: 'transport-10', component: TransportTenComponent },
  { path: 'transport-11', component: TransportElevenComponent },
  { path: 'transport-12', component: TransportTwelveComponent },
  { path: 'transport-13', component: TransportThreetComponent },
  { path: 'transport-14', component: TransportFourtComponent },
  { path: 'transport-15', component: TransportFivetComponent },
  { path: 'transport-16', component: TransportSixtComponent },
  { path: 'transport-17', component: TransportSeventComponent },
  { path: 'transport-18', component: TransportEighttComponent },
  { path: 'transport-19', component: TransportNinetComponent },
  { path: 'transport-20', component: TransportTwentyComponent },
  { path: 'transport-21', component: TransportToneComponent },
  { path: 'transport-22', component: TransportTtwoComponent },
  { path: 'transport-23', component: TransportTthreeComponent },
  { path: 'transport-24', component: TransportTfourComponent },
  { path: 'transport-25', component: TransportTfiveComponent },
  { path: 'transport-26', component: TransportTsixComponent },
  { path: 'transport-27', component: TransportTsevenComponent },
  { path: 'transport-28', component: TransportTeightComponent },
  { path: 'transport-29', component: TransportTnineComponent },
  { path: 'transport-30', component: TransportThirtyComponent },
  { path: 'transport-31', component: TransportThreeoneComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportRoutingModule { }
