import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportHomeComponent } from './report-home/report-home.component';
import { ReportOneComponent } from './report-one/report-one.component';
import { ReportTwoComponent } from './report-two/report-two.component';
import { ReportFourComponent } from './report-four/report-four.component';
import { ReportSixComponent } from './report-six/report-six.component';
import { ReportSevenComponent } from './report-seven/report-seven.component';
import { ReportEightComponent } from './report-eight/report-eight.component';
import { ReportNineComponent } from './report-nine/report-nine.component';
import { ReportTenComponent } from './report-ten/report-ten.component';
import { ReportElevenComponent } from './report-eleven/report-eleven.component';
import { ReportTwelveComponent } from './report-twelve/report-twelve.component';
import { ReportThirdtComponent } from './report-thirdt/report-thirdt.component';
import { ReportFourtComponent } from './report-fourt/report-fourt.component';
import { ReportThreeComponent } from './report-three/report-three.component';
import { ReportFiveComponent } from './report-five/report-five.component';


const routes: Routes = [
  { path: '', component: ReportHomeComponent },
  { path: 'report-home', component: ReportHomeComponent },
  { path: 'report-1', component: ReportOneComponent },
  { path: 'report-2', component: ReportTwoComponent },
  { path: 'report-3', component: ReportThreeComponent },
  { path: 'report-4', component: ReportFourComponent },
  { path: 'report-5', component: ReportFiveComponent },
  { path: 'report-6', component: ReportSixComponent },
  { path: 'report-7', component: ReportSevenComponent },
  { path: 'report-8', component: ReportEightComponent },
  { path: 'report-9', component: ReportNineComponent },
  { path: 'report-10', component: ReportTenComponent },
  { path: 'report-11', component: ReportElevenComponent },
  { path: 'report-12', component: ReportTwelveComponent },
  { path: 'report-13', component: ReportThirdtComponent },
  { path: 'report-14', component: ReportFourtComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
