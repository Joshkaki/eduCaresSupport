import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsRoutingModule } from './sms-routing.module';
import { SmsHomeComponent } from './sms-home/sms-home.component';
import { SmsOneComponent } from './sms-one/sms-one.component';
import { SmsTwoComponent } from './sms-two/sms-two.component';
import { SmsThreeComponent } from './sms-three/sms-three.component';
import { SmsFourComponent } from './sms-four/sms-four.component';
import { SmsFiveComponent } from './sms-five/sms-five.component';
import { SmsSixComponent } from './sms-six/sms-six.component';
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
  declarations: [SmsHomeComponent, SmsOneComponent, SmsTwoComponent, SmsThreeComponent, SmsFourComponent, SmsFiveComponent, SmsSixComponent],
  imports: [
    CommonModule,
    SmsRoutingModule,

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
export class SmsModule { }
