import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportRoutingModule } from './transport-routing.module';
import { TransportHomeComponent } from './transport-home/transport-home.component';
import { TransportOneComponent } from './transport-one/transport-one.component';
import { TransportElevenComponent } from './transport-eleven/transport-eleven.component';
import { TransportToneComponent } from './transport-tone/transport-tone.component';
import { TransportThreeoneComponent } from './transport-threeone/transport-threeone.component';
import { TransportTwoComponent } from './transport-two/transport-two.component';
import { TransportTwelveComponent } from './transport-twelve/transport-twelve.component';
import { TransportTtwoComponent } from './transport-ttwo/transport-ttwo.component';
import { TransportThreeComponent } from './transport-three/transport-three.component';
import { TransportThreetComponent } from './transport-threet/transport-threet.component';
import { TransportTthreeComponent } from './transport-tthree/transport-tthree.component';
import { TransportFourComponent } from './transport-four/transport-four.component';
import { TransportFourtComponent } from './transport-fourt/transport-fourt.component';
import { TransportTfourComponent } from './transport-tfour/transport-tfour.component';
import { TransportFiveComponent } from './transport-five/transport-five.component';
import { TransportFivetComponent } from './transport-fivet/transport-fivet.component';
import { TransportTfiveComponent } from './transport-tfive/transport-tfive.component';
import { TransportSixComponent } from './transport-six/transport-six.component';
import { TransportSixtComponent } from './transport-sixt/transport-sixt.component';
import { TransportTsixComponent } from './transport-tsix/transport-tsix.component';
import { TransportSevenComponent } from './transport-seven/transport-seven.component';
import { TransportSeventComponent } from './transport-sevent/transport-sevent.component';
import { TransportTsevenComponent } from './transport-tseven/transport-tseven.component';
import { TransportEightComponent } from './transport-eight/transport-eight.component';
import { TransportEighttComponent } from './transport-eightt/transport-eightt.component';
import { TransportTeightComponent } from './transport-teight/transport-teight.component';
import { TransportNineComponent } from './transport-nine/transport-nine.component';
import { TransportNinetComponent } from './transport-ninet/transport-ninet.component';
import { TransportTnineComponent } from './transport-tnine/transport-tnine.component';
import { TransportTenComponent } from './transport-ten/transport-ten.component';
import { TransportTwentyComponent } from './transport-twenty/transport-twenty.component';
import { TransportThirtyComponent } from './transport-thirty/transport-thirty.component';
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
  declarations: [TransportHomeComponent, TransportOneComponent, TransportElevenComponent, TransportToneComponent, TransportThreeoneComponent, TransportTwoComponent, TransportTwelveComponent, TransportTtwoComponent, TransportThreeComponent, TransportThreetComponent, TransportTthreeComponent, TransportFourComponent, TransportFourtComponent, TransportTfourComponent, TransportFiveComponent, TransportFivetComponent, TransportTfiveComponent, TransportSixComponent, TransportSixtComponent, TransportTsixComponent, TransportSevenComponent, TransportSeventComponent, TransportTsevenComponent, TransportEightComponent, TransportEighttComponent, TransportTeightComponent, TransportNineComponent, TransportNinetComponent, TransportTnineComponent, TransportTenComponent, TransportTwentyComponent, TransportThirtyComponent],
  imports: [
    CommonModule,
    TransportRoutingModule,

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
export class TransportModule { }
