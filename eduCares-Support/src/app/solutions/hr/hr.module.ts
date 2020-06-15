import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrHomeComponent } from './hr-home/hr-home.component';
import { HrOneComponent } from './hr-one/hr-one.component';
import { HrTwoComponent } from './hr-two/hr-two.component';
import { HrThreeComponent } from './hr-three/hr-three.component';
import { HrElevenComponent } from './hr-eleven/hr-eleven.component';
import { HrToneComponent } from './hr-tone/hr-tone.component';
import { HrTwelveComponent } from './hr-twelve/hr-twelve.component';
import { HrTtwoComponent } from './hr-ttwo/hr-ttwo.component';
import { HrThreetComponent } from './hr-threet/hr-threet.component';
import { HrTthreeComponent } from './hr-tthree/hr-tthree.component';
import { HrFourComponent } from './hr-four/hr-four.component';
import { HrFourtComponent } from './hr-fourt/hr-fourt.component';
import { HrTfourComponent } from './hr-tfour/hr-tfour.component';
import { HrFiveComponent } from './hr-five/hr-five.component';
import { HrFivetComponent } from './hr-fivet/hr-fivet.component';
import { HrTfiveComponent } from './hr-tfive/hr-tfive.component';
import { HrSixComponent } from './hr-six/hr-six.component';
import { HrSixtComponent } from './hr-sixt/hr-sixt.component';
import { HrSevenComponent } from './hr-seven/hr-seven.component';
import { HrSeventComponent } from './hr-sevent/hr-sevent.component';
import { HrEightComponent } from './hr-eight/hr-eight.component';
import { HrEighttComponent } from './hr-eightt/hr-eightt.component';
import { HrNineComponent } from './hr-nine/hr-nine.component';
import { HrNinetComponent } from './hr-ninet/hr-ninet.component';
import { HrTenComponent } from './hr-ten/hr-ten.component';
import { HrTwentyComponent } from './hr-twenty/hr-twenty.component';
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
  declarations: [HrHomeComponent, HrOneComponent, HrTwoComponent, HrThreeComponent, HrElevenComponent, HrToneComponent, HrTwelveComponent, HrTtwoComponent, HrThreetComponent, HrTthreeComponent, HrFourComponent, HrFourtComponent, HrTfourComponent, HrFiveComponent, HrFivetComponent, HrTfiveComponent, HrSixComponent, HrSixtComponent, HrSevenComponent, HrSeventComponent, HrEightComponent, HrEighttComponent, HrNineComponent, HrNinetComponent, HrTenComponent, HrTwentyComponent],
  imports: [
    CommonModule,
    HrRoutingModule,

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
export class HrModule { }
