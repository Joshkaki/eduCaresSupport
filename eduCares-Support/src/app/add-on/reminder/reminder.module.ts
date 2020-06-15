import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReminderRoutingModule } from './reminder-routing.module';
import { ReminderHomeComponent } from './reminder-home/reminder-home.component';
import { ReminderOneComponent } from './reminder-one/reminder-one.component';
import { ReminderTwoComponent } from './reminder-two/reminder-two.component';
import { ReminderThreeComponent } from './reminder-three/reminder-three.component';
import { ReminderFourComponent } from './reminder-four/reminder-four.component';
import { ReminderFiveComponent } from './reminder-five/reminder-five.component';
import { ReminderSixComponent } from './reminder-six/reminder-six.component';
import { ReminderSevenComponent } from './reminder-seven/reminder-seven.component';
import { ReminderEightComponent } from './reminder-eight/reminder-eight.component';
import { ReminderNineComponent } from './reminder-nine/reminder-nine.component';
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
  declarations: [ReminderHomeComponent, ReminderOneComponent, ReminderTwoComponent, ReminderThreeComponent, ReminderFourComponent, ReminderFiveComponent, ReminderSixComponent, ReminderSevenComponent, ReminderEightComponent, ReminderNineComponent],
  imports: [
    CommonModule,
    ReminderRoutingModule,

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
export class ReminderModule { }
