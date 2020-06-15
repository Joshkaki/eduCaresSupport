import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlinepayRoutingModule } from './onlinepay-routing.module';
import { OnlinepayHomeComponent } from './onlinepay-home/onlinepay-home.component';
import { OnlinepayOneComponent } from './onlinepay-one/onlinepay-one.component';
import { OnlinepayTwoComponent } from './onlinepay-two/onlinepay-two.component';
import { OnlinepayThreeComponent } from './onlinepay-three/onlinepay-three.component';
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
  declarations: [OnlinepayHomeComponent, OnlinepayOneComponent, OnlinepayTwoComponent, OnlinepayThreeComponent],
  imports: [
    CommonModule,
    OnlinepayRoutingModule,

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
export class OnlinepayModule { }
