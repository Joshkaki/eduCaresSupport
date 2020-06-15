import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentattRoutingModule } from './studentatt-routing.module';
import { StudentattHomeComponent } from './studentatt-home/studentatt-home.component';
import { StudentattOneComponent } from './studentatt-one/studentatt-one.component';
import { StudentattTwoComponent } from './studentatt-two/studentatt-two.component';
import { StudentattThreeComponent } from './studentatt-three/studentatt-three.component';
import { StudentattFourComponent } from './studentatt-four/studentatt-four.component';
import { StudentattFiveComponent } from './studentatt-five/studentatt-five.component';
import { StudentattSixComponent } from './studentatt-six/studentatt-six.component';
import { StudentattSevenComponent } from './studentatt-seven/studentatt-seven.component';
import { StudentattEightComponent } from './studentatt-eight/studentatt-eight.component';
import { StudentattNineComponent } from './studentatt-nine/studentatt-nine.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StudentattTenComponent } from './studentatt-ten/studentatt-ten.component';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [StudentattHomeComponent, StudentattOneComponent, StudentattTwoComponent, StudentattThreeComponent, StudentattFourComponent, StudentattFiveComponent, StudentattSixComponent, StudentattSevenComponent, StudentattEightComponent, StudentattNineComponent, StudentattTenComponent],
  imports: [
    CommonModule,
    StudentattRoutingModule,

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
export class StudentattModule { }
