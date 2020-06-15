import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeetransRoutingModule } from './feetrans-routing.module';
import { FeeEighttComponent } from './fee-eightt/fee-eightt.component';
import { FeeNinetComponent } from './fee-ninet/fee-ninet.component';
import { FeeTwentyComponent } from './fee-twenty/fee-twenty.component';
import { FeeToneComponent } from './fee-tone/fee-tone.component';
import { FeeTtwoComponent } from './fee-ttwo/fee-ttwo.component';
import { FeeTthreeComponent } from './fee-tthree/fee-tthree.component';
import { FeeTfourComponent } from './fee-tfour/fee-tfour.component';
import { FeeTfiveComponent } from './fee-tfive/fee-tfive.component';
import { FeeTsixComponent } from './fee-tsix/fee-tsix.component';
import { FeeTsevenComponent } from './fee-tseven/fee-tseven.component';
import { FeeTeightComponent } from './fee-teight/fee-teight.component';
import { FeeTnineComponent } from './fee-tnine/fee-tnine.component';
import { FeeThirtyComponent } from './fee-thirty/fee-thirty.component';
import { FeeThirtyoneComponent } from './fee-thirtyone/fee-thirtyone.component';
import { FeeThirtytwoComponent } from './fee-thirtytwo/fee-thirtytwo.component';
import { FeeThirtythreeComponent } from './fee-thirtythree/fee-thirtythree.component';
import { FeeThirtyfourComponent } from './fee-thirtyfour/fee-thirtyfour.component';
import { FeeThirtyfiveComponent } from './fee-thirtyfive/fee-thirtyfive.component';
import { FeeThirtysixComponent } from './fee-thirtysix/fee-thirtysix.component';
import { FeeThirtysevenComponent } from './fee-thirtyseven/fee-thirtyseven.component';
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
  declarations: [FeeEighttComponent, FeeNinetComponent, FeeTwentyComponent, FeeToneComponent, FeeTtwoComponent, FeeTthreeComponent, FeeTfourComponent, FeeTfiveComponent, FeeTsixComponent, FeeTsevenComponent, FeeTeightComponent, FeeTnineComponent, FeeThirtyComponent, FeeThirtyoneComponent, FeeThirtytwoComponent, FeeThirtythreeComponent, FeeThirtyfourComponent, FeeThirtyfiveComponent, FeeThirtysixComponent, FeeThirtysevenComponent],
  imports: [
    CommonModule,
    FeetransRoutingModule,

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
export class FeetransModule { }
