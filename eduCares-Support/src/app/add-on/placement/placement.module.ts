import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementRoutingModule } from './placement-routing.module';
import { PlacementOneComponent } from './placement-one/placement-one.component';
import { PlacementHomeComponent } from './placement-home/placement-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PlacementTwoComponent } from './placement-two/placement-two.component';
import { PlacementThreeComponent } from './placement-three/placement-three.component';
import { PlacementFourComponent } from './placement-four/placement-four.component';
import { PlacementFiveComponent } from './placement-five/placement-five.component';
import { PlacementSixComponent } from './placement-six/placement-six.component';
import { PlacementSevenComponent } from './placement-seven/placement-seven.component';
import { PlacementEightComponent } from './placement-eight/placement-eight.component';


@NgModule({
  declarations: [
    // tslint:disable-next-line:max-line-length
    PlacementOneComponent, PlacementHomeComponent, PlacementTwoComponent, PlacementThreeComponent, PlacementFourComponent, PlacementFiveComponent, PlacementSixComponent
  , PlacementSevenComponent, PlacementEightComponent],
  imports: [
    CommonModule,
    PlacementRoutingModule,

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
export class PlacementModule { }
