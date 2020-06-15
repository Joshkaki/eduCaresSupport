import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatapalleteRoutingModule } from './datapallete-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DatapalleteHomeComponent } from './datapallete-home/datapallete-home.component';
import { DatapalleteOneComponent } from './datapallete-one/datapallete-one.component';
import { DatapalleteTwoComponent } from './datapallete-two/datapallete-two.component';
import { DatapalleteThreeComponent } from './datapallete-three/datapallete-three.component';


@NgModule({
  declarations: [DatapalleteHomeComponent, DatapalleteOneComponent, DatapalleteTwoComponent, DatapalleteThreeComponent],
  imports: [
    CommonModule,
    DatapalleteRoutingModule,

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
export class DatapalleteModule { }
