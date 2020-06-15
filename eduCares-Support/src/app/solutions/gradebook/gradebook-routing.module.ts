import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradeHomeComponent } from './grade-home/grade-home.component';
import { GradeOneComponent } from './grade-one/grade-one.component';
import { GradeTwoComponent } from './grade-two/grade-two.component';
import { GradeThreeComponent } from './grade-three/grade-three.component';
import { GradeFourComponent } from './grade-four/grade-four.component';
import { GradeFiveComponent } from './grade-five/grade-five.component';
import { GradeSixComponent } from './grade-six/grade-six.component';
import { GradeSevenComponent } from './grade-seven/grade-seven.component';
import { GradeEightComponent } from './grade-eight/grade-eight.component';
import { GradeNineComponent } from './grade-nine/grade-nine.component';
import { GradeTenComponent } from './grade-ten/grade-ten.component';
import { GradeElevenComponent } from './grade-eleven/grade-eleven.component';
import { GradeThreetComponent } from './grade-threet/grade-threet.component';
import { GradeFourtComponent } from './grade-fourt/grade-fourt.component';
import { GradeFivetComponent } from './grade-fivet/grade-fivet.component';
import { GradeSixtComponent } from './grade-sixt/grade-sixt.component';
import { GradeSeventComponent } from './grade-sevent/grade-sevent.component';
import { GradeEnighttComponent } from './grade-enightt/grade-enightt.component';
import { GradeNinetComponent } from './grade-ninet/grade-ninet.component';
import { GradeTwentyComponent } from './grade-twenty/grade-twenty.component';
import { GradeToneComponent } from './grade-tone/grade-tone.component';
import { GradeTtwoComponent } from './grade-ttwo/grade-ttwo.component';
import { GradeTthreeComponent } from './grade-tthree/grade-tthree.component';
import { GradeTfourComponent } from './grade-tfour/grade-tfour.component';
import { GradeTwelveComponent } from './grade-twelve/grade-twelve.component';


const routes: Routes = [
  { path: '', component: GradeHomeComponent },
  { path: 'gradebook-home', component: GradeHomeComponent },
  { path: 'gradebook-1', component: GradeOneComponent },
  { path: 'gradebook-2', component: GradeTwoComponent },
  { path: 'gradebook-3', component: GradeThreeComponent },
  { path: 'gradebook-4', component: GradeFourComponent },
  { path: 'gradebook-5', component: GradeFiveComponent },
  { path: 'gradebook-6', component: GradeSixComponent },
  { path: 'gradebook-7', component: GradeSevenComponent },
  { path: 'gradebook-8', component: GradeEightComponent },
  { path: 'gradebook-9', component: GradeNineComponent },
  { path: 'gradebook-10', component: GradeTenComponent },
  { path: 'gradebook-11', component: GradeElevenComponent },
  { path: 'gradebook-12', component: GradeTwelveComponent },
  { path: 'gradebook-13', component: GradeThreetComponent },
  { path: 'gradebook-14', component: GradeFourtComponent },
  { path: 'gradebook-15', component: GradeFivetComponent },
  { path: 'gradebook-16', component: GradeSixtComponent },
  { path: 'gradebook-17', component: GradeSeventComponent },
  { path: 'gradebook-18', component: GradeEnighttComponent },
  { path: 'gradebook-19', component: GradeNinetComponent },
  { path: 'gradebook-20', component: GradeTwentyComponent },
  { path: 'gradebook-21', component: GradeToneComponent },
  { path: 'gradebook-22', component: GradeTtwoComponent },
  { path: 'gradebook-23', component: GradeTthreeComponent },
  { path: 'gradebook-24', component: GradeTfourComponent }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradebookRoutingModule { }
