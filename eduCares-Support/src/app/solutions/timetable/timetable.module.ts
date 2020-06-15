import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetableRoutingModule } from './timetable-routing.module';
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
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TimetableThreetComponent } from './timetable-threet/timetable-threet.component';
import { TimetableFourtComponent } from './timetable-fourt/timetable-fourt.component';
import { TimetableFivetComponent } from './timetable-fivet/timetable-fivet.component';
import { TimetableSixtComponent } from './timetable-sixt/timetable-sixt.component';
import { TimetableSeventComponent } from './timetable-sevent/timetable-sevent.component';
import { TimetableEighttComponent } from './timetable-eightt/timetable-eightt.component';
import { TimetableNinetComponent } from './timetable-ninet/timetable-ninet.component';
import { TimetableTwentyComponent } from './timetable-twenty/timetable-twenty.component';
import { TimetableToneComponent } from './timetable-tone/timetable-tone.component';
import { TimetableTtwoComponent } from './timetable-ttwo/timetable-ttwo.component';
import { TimetableTthreeComponent } from './timetable-tthree/timetable-tthree.component';
import { TimetableTfourComponent } from './timetable-tfour/timetable-tfour.component';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [TimetableHomeComponent, TimetableOneComponent, TimetableTwoComponent, TimetableThreeComponent, TimetableFourComponent, TimetableFiveComponent, TimetableSixComponent, TimetableSevenComponent, TimetableEightComponent, TimetableNineComponent, TimetableTenComponent, TimetableElevenComponent, TimetableTwelveComponent, TimetableThreetComponent, TimetableFourtComponent, TimetableFivetComponent, TimetableSixtComponent, TimetableSeventComponent, TimetableEighttComponent, TimetableNinetComponent, TimetableTwentyComponent, TimetableToneComponent, TimetableTtwoComponent, TimetableTthreeComponent, TimetableTfourComponent],
  imports: [
    CommonModule,
    TimetableRoutingModule,

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
export class TimetableModule { }
