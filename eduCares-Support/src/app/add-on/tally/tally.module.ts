import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TallyRoutingModule } from './tally-routing.module';
import { TallyHomeComponent } from './tally-home/tally-home.component';
import { TallyOneComponent } from './tally-one/tally-one.component';
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
  declarations: [TallyHomeComponent, TallyOneComponent],
  imports: [
    CommonModule,
    TallyRoutingModule,

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
export class TallyModule { }
