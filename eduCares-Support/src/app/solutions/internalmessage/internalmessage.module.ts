import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalmessageRoutingModule } from './internalmessage-routing.module';
import { InternalmessageHomeComponent } from './internalmessage-home/internalmessage-home.component';
import { InternalmessageOneComponent } from './internalmessage-one/internalmessage-one.component';
import { InternalmessageTwoComponent } from './internalmessage-two/internalmessage-two.component';
import { InternalmessageThreeComponent } from './internalmessage-three/internalmessage-three.component';
import { InternalmessageFourComponent } from './internalmessage-four/internalmessage-four.component';
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
  declarations: [InternalmessageHomeComponent, InternalmessageOneComponent, InternalmessageTwoComponent, InternalmessageThreeComponent, InternalmessageFourComponent],
  imports: [
    CommonModule,
    InternalmessageRoutingModule,

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
export class InternalmessageModule { }
