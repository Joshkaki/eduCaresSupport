import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustrepRoutingModule } from './custrep-routing.module';
import { CustrepHomeComponent } from './custrep-home/custrep-home.component';
import { CustrepOneComponent } from './custrep-one/custrep-one.component';
import { CustrepTwoComponent } from './custrep-two/custrep-two.component';
import { CustrepThreeComponent } from './custrep-three/custrep-three.component';
import { CustrepFourComponent } from './custrep-four/custrep-four.component';
import { CustrepFiveComponent } from './custrep-five/custrep-five.component';
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
  declarations: [CustrepHomeComponent, CustrepOneComponent, CustrepTwoComponent, CustrepThreeComponent, CustrepFourComponent, CustrepFiveComponent],
  imports: [
    CommonModule,
    CustrepRoutingModule,

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
export class CustrepModule { }
