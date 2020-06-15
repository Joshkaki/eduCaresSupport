import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomimpRoutingModule } from './customimp-routing.module';
import { CustomimpHomeComponent } from './customimp-home/customimp-home.component';
import { CustomimpOneComponent } from './customimp-one/customimp-one.component';
import { CustomimpTwoComponent } from './customimp-two/customimp-two.component';
import { CustomimpThreeComponent } from './customimp-three/customimp-three.component';
import { CustomimpFourComponent } from './customimp-four/customimp-four.component';
import { CustomimpFiveComponent } from './customimp-five/customimp-five.component';
import { CustomimpSixComponent } from './customimp-six/customimp-six.component';
import { CustomimpSevenComponent } from './customimp-seven/customimp-seven.component';
import { CustomimpEightComponent } from './customimp-eight/customimp-eight.component';
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
  declarations: [CustomimpHomeComponent, CustomimpOneComponent, CustomimpTwoComponent, CustomimpThreeComponent, CustomimpFourComponent, CustomimpFiveComponent, CustomimpSixComponent, CustomimpSevenComponent, CustomimpEightComponent],
  imports: [
    CommonModule,
    CustomimpRoutingModule,

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
export class CustomimpModule { }
