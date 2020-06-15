import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostelRoutingModule } from './hostel-routing.module';
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
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
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


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [HostelHomeComponent, HostelOneComponent, HostelTwoComponent, HostelThreComponent, HostelFourComponent, HostelFiveComponent, HostelSixComponent, HostelSevenComponent, HostelEightComponent, HostelNineComponent, HostelTenComponent, HostelElevenComponent, HostelTwelveComponent, HostelThirteenComponent, HostelForteenComponent, HostelFifteenComponent, HostelSixteenComponent, HostelSeventeenComponent, HostelEightteenComponent, HostelNineteenComponent, HostelTwentyComponent, HostelToneComponent, HostelTtwoComponent, HostelTthreeComponent, HostelTfourComponent],
  imports: [
    CommonModule,
    HostelRoutingModule,

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
export class HostelModule { }
