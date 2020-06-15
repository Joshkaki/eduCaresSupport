import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutonotiRoutingModule } from './autonoti-routing.module';
import { AutonotiHomeComponent } from './autonoti-home/autonoti-home.component';
import { AutonotiOneComponent } from './autonoti-one/autonoti-one.component';
import { AutonotiTwoComponent } from './autonoti-two/autonoti-two.component';
import { AutonotiThreeComponent } from './autonoti-three/autonoti-three.component';
import { AutonotiFourComponent } from './autonoti-four/autonoti-four.component';
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
  declarations: [AutonotiHomeComponent, AutonotiOneComponent, AutonotiTwoComponent, AutonotiThreeComponent, AutonotiFourComponent],
  imports: [
    CommonModule,
    AutonotiRoutingModule,

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
export class AutonotiModule { }
