import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventHomeComponent } from './event-home/event-home.component';
import { EventOneComponent } from './event-one/event-one.component';
import { EventTwoComponent } from './event-two/event-two.component';
import { EventThreeComponent } from './event-three/event-three.component';
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
  declarations: [EventHomeComponent, EventOneComponent, EventTwoComponent, EventThreeComponent],
  imports: [
    CommonModule,
    EventRoutingModule,

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
export class EventModule { }
