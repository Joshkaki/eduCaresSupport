import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimetableHomeComponent } from './timetable-home/timetable-home.component';
import { TimetableOneComponent } from './timetable-one/timetable-one.component';
import { TimetableTwoComponent } from './timetable-two/timetable-two.component';
import { TimetableThreeComponent } from './timetable-three/timetable-three.component';
import { TimetableFourComponent } from './timetable-four/timetable-four.component';
import { TimetableFiveComponent } from './timetable-five/timetable-five.component';
import { TimetableSixComponent } from './timetable-six/timetable-six.component';
import { TimetableSevenComponent } from './timetable-seven/timetable-seven.component';
import { TimetableEightComponent } from './timetable-eight/timetable-eight.component';
import { TimetableNineComponent } from './timetable-nine/timetable-nine.component';
import { TimetableTenComponent } from './timetable-ten/timetable-ten.component';
import { TimetableElevenComponent } from './timetable-eleven/timetable-eleven.component';
import { TimetableTwelveComponent } from './timetable-twelve/timetable-twelve.component';
import { TimetableTthreeComponent } from './timetable-tthree/timetable-tthree.component';
import { TimetableTfourComponent } from './timetable-tfour/timetable-tfour.component';
import { TimetableTwentyComponent } from './timetable-twenty/timetable-twenty.component';
import { TimetableToneComponent } from './timetable-tone/timetable-tone.component';
import { TimetableTtwoComponent } from './timetable-ttwo/timetable-ttwo.component';
import { TimetableThreetComponent } from './timetable-threet/timetable-threet.component';
import { TimetableFourtComponent } from './timetable-fourt/timetable-fourt.component';
import { TimetableFivetComponent } from './timetable-fivet/timetable-fivet.component';
import { TimetableSixtComponent } from './timetable-sixt/timetable-sixt.component';
import { TimetableSeventComponent } from './timetable-sevent/timetable-sevent.component';
import { TimetableEighttComponent } from './timetable-eightt/timetable-eightt.component';
import { TimetableNinetComponent } from './timetable-ninet/timetable-ninet.component';


const routes: Routes = [
  { path: '', component: TimetableHomeComponent },
  { path: 'timetable-home', component: TimetableHomeComponent },
  { path: 'timetable-1', component: TimetableOneComponent },
  { path: 'timetable-2', component: TimetableTwoComponent },
  { path: 'timetable-3', component: TimetableThreeComponent },
  { path: 'timetable-4', component: TimetableFourComponent },
  { path: 'timetable-5', component: TimetableFiveComponent },
  { path: 'timetable-6', component: TimetableSixComponent },
  { path: 'timetable-7', component: TimetableSevenComponent },
  { path: 'timetable-8', component: TimetableEightComponent },
  { path: 'timetable-9', component: TimetableNineComponent },
  { path: 'timetable-10', component: TimetableTenComponent },
  { path: 'timetable-11', component: TimetableElevenComponent },
  { path: 'timetable-12', component: TimetableTwelveComponent },
  { path: 'timetable-13', component: TimetableThreetComponent },
  { path: 'timetable-14', component: TimetableFourtComponent },
  { path: 'timetable-15', component: TimetableFivetComponent },
  { path: 'timetable-16', component: TimetableSixtComponent },
  { path: 'timetable-17', component: TimetableSeventComponent },
  { path: 'timetable-18', component: TimetableEighttComponent },
  { path: 'timetable-19', component: TimetableNinetComponent },
  { path: 'timetable-20', component: TimetableTwentyComponent },
  { path: 'timetable-21', component: TimetableToneComponent },
  { path: 'timetable-22', component: TimetableTtwoComponent },
  { path: 'timetable-23', component: TimetableTthreeComponent },
  { path: 'timetable-24', component: TimetableTfourComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimetableRoutingModule { }
