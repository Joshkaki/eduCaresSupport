import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentrollnumRoutingModule } from './studentrollnum-routing.module';
import { StudentrollnumHomeComponent } from './studentrollnum-home/studentrollnum-home.component';
import { StudentrollnumOneComponent } from './studentrollnum-one/studentrollnum-one.component';
import { StudentrollnumTwoComponent } from './studentrollnum-two/studentrollnum-two.component';
import { StudentrollnumThreeComponent } from './studentrollnum-three/studentrollnum-three.component';
import { StudentrollnumFourComponent } from './studentrollnum-four/studentrollnum-four.component';
import { StudentrollnumFiveComponent } from './studentrollnum-five/studentrollnum-five.component';
import { StudentrollnumSixComponent } from './studentrollnum-six/studentrollnum-six.component';
import { StudentrollnumSevenComponent } from './studentrollnum-seven/studentrollnum-seven.component';
import { StudentrollnumEightComponent } from './studentrollnum-eight/studentrollnum-eight.component';
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
  declarations: [StudentrollnumHomeComponent, StudentrollnumOneComponent, StudentrollnumTwoComponent, StudentrollnumThreeComponent, StudentrollnumFourComponent, StudentrollnumFiveComponent, StudentrollnumSixComponent, StudentrollnumSevenComponent, StudentrollnumEightComponent],
  imports: [
    CommonModule,
    StudentrollnumRoutingModule,

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
export class StudentrollnumModule { }
