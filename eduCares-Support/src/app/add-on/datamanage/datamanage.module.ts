import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatamanageRoutingModule } from './datamanage-routing.module';
import { DatamanageHomeComponent } from './datamanage-home/datamanage-home.component';
import { DatamanageOneComponent } from './datamanage-one/datamanage-one.component';
import { DatamanageTwoComponent } from './datamanage-two/datamanage-two.component';
import { DatamanageThreeComponent } from './datamanage-three/datamanage-three.component';
import { DatamanageFourComponent } from './datamanage-four/datamanage-four.component';
import { DatamanageFiveComponent } from './datamanage-five/datamanage-five.component';
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
  declarations: [DatamanageHomeComponent, DatamanageOneComponent, DatamanageTwoComponent, DatamanageThreeComponent, DatamanageFourComponent, DatamanageFiveComponent],
  imports: [
    CommonModule,
    DatamanageRoutingModule,

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
export class DatamanageModule { }
