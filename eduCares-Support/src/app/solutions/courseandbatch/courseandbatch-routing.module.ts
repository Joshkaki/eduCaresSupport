import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CbHomeComponent } from './cb-home/cb-home.component';
import { CbOneComponent } from './cb-one/cb-one.component';
import { CbTwoComponent } from './cb-two/cb-two.component';
import { CbThreeComponent } from './cb-three/cb-three.component';
import { CbFourComponent } from './cb-four/cb-four.component';
import { CbFiveComponent } from './cb-five/cb-five.component';
import { CbSixComponent } from './cb-six/cb-six.component';
import { CbSevenComponent } from './cb-seven/cb-seven.component';
import { CbEightComponent } from './cb-eight/cb-eight.component';
import { CbNineComponent } from './cb-nine/cb-nine.component';
import { CbTenComponent } from './cb-ten/cb-ten.component';
import { CbElevenComponent } from './cb-eleven/cb-eleven.component';
import { CbTwelveComponent } from './cb-twelve/cb-twelve.component';
import { CbThreetComponent } from './cb-threet/cb-threet.component';
import { CbFourtComponent } from './cb-fourt/cb-fourt.component';
import { CbFivetComponent } from './cb-fivet/cb-fivet.component';
import { CbSixtComponent } from './cb-sixt/cb-sixt.component';
import { CbSeventComponent } from './cb-sevent/cb-sevent.component';
import { CbEighttComponent } from './cb-eightt/cb-eightt.component';
import { CbNinetComponent } from './cb-ninet/cb-ninet.component';
import { CbTwentyComponent } from './cb-twenty/cb-twenty.component';
import { CbTthreeComponent } from './cb-tthree/cb-tthree.component';
import { CbTfourComponent } from './cb-tfour/cb-tfour.component';
import { CbTfiveComponent } from './cb-tfive/cb-tfive.component';
import { CbTtwoComponent } from './cb-ttwo/cb-ttwo.component';
import { CbToneComponent } from './cb-tone/cb-tone.component';


const routes: Routes = [
  { path: '', component: CbHomeComponent },
  { path: 'courses&batches-home', component: CbHomeComponent },
  { path: 'courses&batches-1', component: CbOneComponent },
  { path: 'courses&batches-2', component: CbTwoComponent },
  { path: 'courses&batches-3', component: CbThreeComponent },
  { path: 'courses&batches-4', component: CbFourComponent },
  { path: 'courses&batches-5', component: CbFiveComponent },
  { path: 'courses&batches-6', component: CbSixComponent },
  { path: 'courses&batches-7', component: CbSevenComponent },
  { path: 'courses&batches-8', component: CbEightComponent },
  { path: 'courses&batches-9', component: CbNineComponent },
  { path: 'courses&batches-10', component: CbTenComponent },
  { path: 'courses&batches-11', component: CbElevenComponent },
  { path: 'courses&batches-12', component: CbTwelveComponent },
  { path: 'courses&batches-13', component: CbThreetComponent },
  { path: 'courses&batches-14', component: CbFourtComponent },
  { path: 'courses&batches-15', component: CbFivetComponent },
  { path: 'courses&batches-16', component: CbSixtComponent },
  { path: 'courses&batches-17', component: CbSeventComponent },
  { path: 'courses&batches-18', component: CbEighttComponent },
  { path: 'courses&batches-19', component: CbNinetComponent },
  { path: 'courses&batches-20', component: CbTwentyComponent },
  { path: 'courses&batches-21', component: CbToneComponent },
  { path: 'courses&batches-22', component: CbTtwoComponent },
  { path: 'courses&batches-23', component: CbTthreeComponent },
  { path: 'courses&batches-24', component: CbTfourComponent },
  { path: 'courses&batches-25', component: CbTfiveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseandbatchRoutingModule { }
