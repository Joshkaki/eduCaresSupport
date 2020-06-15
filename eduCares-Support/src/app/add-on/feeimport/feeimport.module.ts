import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeimportRoutingModule } from './feeimport-routing.module';
import { FeeimportHomeComponent } from './feeimport-home/feeimport-home.component';
import { FeeimportOneComponent } from './feeimport-one/feeimport-one.component';
import { FeeimportTwoComponent } from './feeimport-two/feeimport-two.component';
import { FeeimportThreeComponent } from './feeimport-three/feeimport-three.component';
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
  declarations: [FeeimportHomeComponent, FeeimportOneComponent, FeeimportTwoComponent, FeeimportThreeComponent],
  imports: [
    CommonModule,
    FeeimportRoutingModule,

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
export class FeeimportModule { }
