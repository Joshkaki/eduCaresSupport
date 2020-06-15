import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentRoutingModule } from './assignment-routing.module';
import { AssignmentHomeComponent } from './assignment-home/assignment-home.component';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './assignment-three/assignment-three.component';
import { AssignmentFourComponent } from './assignment-four/assignment-four.component';
import { AssignmentFiveComponent } from './assignment-five/assignment-five.component';
import { AssignmentSixComponent } from './assignment-six/assignment-six.component';
import { AssignmentSevenComponent } from './assignment-seven/assignment-seven.component';
import { AssignmentEightComponent } from './assignment-eight/assignment-eight.component';
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
  declarations: [AssignmentHomeComponent, AssignmentOneComponent, AssignmentTwoComponent, AssignmentThreeComponent, AssignmentFourComponent, AssignmentFiveComponent, AssignmentSixComponent, AssignmentSevenComponent, AssignmentEightComponent],
  imports: [
    CommonModule,
    AssignmentRoutingModule,

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
export class AssignmentModule { }
