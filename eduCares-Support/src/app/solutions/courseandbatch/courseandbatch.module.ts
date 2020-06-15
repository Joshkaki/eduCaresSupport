import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseandbatchRoutingModule } from './courseandbatch-routing.module';
import { CbHomeComponent } from './cb-home/cb-home.component';
import { CbOneComponent } from './cb-one/cb-one.component';
import { CbToneComponent } from './cb-tone/cb-tone.component';
import { CbTwoComponent } from './cb-two/cb-two.component';
import { CbTtwoComponent } from './cb-ttwo/cb-ttwo.component';
import { CbElevenComponent } from './cb-eleven/cb-eleven.component';
import { CbTwelveComponent } from './cb-twelve/cb-twelve.component';
import { CbThreeComponent } from './cb-three/cb-three.component';
import { CbThreetComponent } from './cb-threet/cb-threet.component';
import { CbTthreeComponent } from './cb-tthree/cb-tthree.component';
import { CbFourComponent } from './cb-four/cb-four.component';
import { CbFourtComponent } from './cb-fourt/cb-fourt.component';
import { CbTfourComponent } from './cb-tfour/cb-tfour.component';
import { CbFiveComponent } from './cb-five/cb-five.component';
import { CbFivetComponent } from './cb-fivet/cb-fivet.component';
import { CbTfiveComponent } from './cb-tfive/cb-tfive.component';
import { CbSixComponent } from './cb-six/cb-six.component';
import { CbSixtComponent } from './cb-sixt/cb-sixt.component';
import { CbSevenComponent } from './cb-seven/cb-seven.component';
import { CbSeventComponent } from './cb-sevent/cb-sevent.component';
import { CbEightComponent } from './cb-eight/cb-eight.component';
import { CbEighttComponent } from './cb-eightt/cb-eightt.component';
import { CbNineComponent } from './cb-nine/cb-nine.component';
import { CbNinetComponent } from './cb-ninet/cb-ninet.component';
import { CbTenComponent } from './cb-ten/cb-ten.component';
import { CbTwentyComponent } from './cb-twenty/cb-twenty.component';
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
  declarations: [CbHomeComponent, CbTtwoComponent, CbToneComponent, CbOneComponent, CbTwoComponent, CbElevenComponent, CbTwelveComponent, CbThreeComponent, CbThreetComponent, CbTthreeComponent, CbFourComponent, CbFourtComponent, CbTfourComponent, CbFiveComponent, CbFivetComponent, CbTfiveComponent, CbSixComponent, CbSixtComponent, CbSevenComponent, CbSeventComponent, CbEightComponent, CbEighttComponent, CbNineComponent, CbNinetComponent, CbTenComponent, CbTwentyComponent],
  imports: [
    CommonModule,
    CourseandbatchRoutingModule,

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
export class CourseandbatchModule { }
