import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradebookRoutingModule } from './gradebook-routing.module';
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
import { GradeTwelveComponent } from './grade-twelve/grade-twelve.component';
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
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [GradeHomeComponent, GradeOneComponent, GradeTwoComponent, GradeThreeComponent, GradeFourComponent, GradeFiveComponent, GradeSixComponent, GradeSevenComponent, GradeEightComponent, GradeNineComponent, GradeTenComponent, GradeElevenComponent, GradeTwelveComponent, GradeThreetComponent, GradeFourtComponent, GradeFivetComponent, GradeSixtComponent, GradeSeventComponent, GradeEnighttComponent, GradeNinetComponent, GradeTwentyComponent, GradeToneComponent, GradeTtwoComponent, GradeTthreeComponent, GradeTfourComponent],
  imports: [
    CommonModule,
    GradebookRoutingModule,

    MatGridListModule,
    MatDividerModule,
    MatCardModule,
    MDBBootstrapModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatToolbarModule
  ]
})
export class GradebookModule { }
