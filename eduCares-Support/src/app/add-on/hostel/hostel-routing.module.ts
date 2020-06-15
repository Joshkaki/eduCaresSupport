import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostelHomeComponent } from './hostel-home/hostel-home.component';
import { HostelOneComponent } from './hostel-one/hostel-one.component';
import { HostelTwoComponent } from './hostel-two/hostel-two.component';
import { HostelThreComponent } from './hostel-thre/hostel-thre.component';
import { HostelFourComponent } from './hostel-four/hostel-four.component';
import { HostelFiveComponent } from './hostel-five/hostel-five.component';
import { HostelSixComponent } from './hostel-six/hostel-six.component';
import { HostelSevenComponent } from './hostel-seven/hostel-seven.component';
import { HostelEightComponent } from './hostel-eight/hostel-eight.component';
import { HostelNineComponent } from './hostel-nine/hostel-nine.component';
import { HostelTenComponent } from './hostel-ten/hostel-ten.component';
import { HostelElevenComponent } from './hostel-eleven/hostel-eleven.component';
import { HostelTwelveComponent } from './hostel-twelve/hostel-twelve.component';
import { HostelThirteenComponent } from './hostel-thirteen/hostel-thirteen.component';
import { HostelForteenComponent } from './hostel-forteen/hostel-forteen.component';
import { HostelFifteenComponent } from './hostel-fifteen/hostel-fifteen.component';
import { HostelSixteenComponent } from './hostel-sixteen/hostel-sixteen.component';
import { HostelSeventeenComponent } from './hostel-seventeen/hostel-seventeen.component';
import { HostelEightteenComponent } from './hostel-eightteen/hostel-eightteen.component';
import { HostelNineteenComponent } from './hostel-nineteen/hostel-nineteen.component';
import { HostelTwentyComponent } from './hostel-twenty/hostel-twenty.component';
import { HostelToneComponent } from './hostel-tone/hostel-tone.component';
import { HostelTtwoComponent } from './hostel-ttwo/hostel-ttwo.component';
import { HostelTthreeComponent } from './hostel-tthree/hostel-tthree.component';
import { HostelTfourComponent } from './hostel-tfour/hostel-tfour.component';


const routes: Routes = [
  { path: '', component: HostelHomeComponent },
  { path: 'hostel-home', component: HostelHomeComponent },
  { path: 'hostel-1', component: HostelOneComponent },
  { path: 'hostel-2', component: HostelTwoComponent },
  { path: 'hostel-3', component: HostelThreComponent },
  { path: 'hostel-4', component: HostelFourComponent },
  { path: 'hostel-5', component: HostelFiveComponent },
  { path: 'hostel-6', component: HostelSixComponent },
  { path: 'hostel-7', component: HostelSevenComponent },
  { path: 'hostel-8', component: HostelEightComponent },
  { path: 'hostel-9', component: HostelNineComponent },
  { path: 'hostel-10', component: HostelTenComponent },
  { path: 'hostel-11', component: HostelElevenComponent },
  { path: 'hostel-12', component: HostelTwelveComponent },
  { path: 'hostel-13', component: HostelThirteenComponent },
  { path: 'hostel-14', component: HostelForteenComponent },
  { path: 'hostel-15', component: HostelFifteenComponent },
  { path: 'hostel-16', component: HostelSixteenComponent },
  { path: 'hostel-17', component: HostelSeventeenComponent },
  { path: 'hostel-18', component: HostelEightteenComponent },
  { path: 'hostel-19', component: HostelNineteenComponent },
  { path: 'hostel-20', component: HostelTwentyComponent },
  { path: 'hostel-21', component: HostelToneComponent },
  { path: 'hostel-22', component: HostelTtwoComponent },
  { path: 'hostel-23', component: HostelTthreeComponent },
  { path: 'hostel-24', component: HostelTfourComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostelRoutingModule { }
