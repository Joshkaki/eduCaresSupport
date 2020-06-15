import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpattRoutingModule } from './empatt-routing.module';
import { EmpattHomeComponent } from './empatt-home/empatt-home.component';
import { EmpattOneComponent } from './empatt-one/empatt-one.component';
import { EmpattTwoComponent } from './empatt-two/empatt-two.component';
import { EmpattThreeComponent } from './empatt-three/empatt-three.component';
import { EmpattFourComponent } from './empatt-four/empatt-four.component';
import { EmpattFiveComponent } from './empatt-five/empatt-five.component';
import { EmpattSixComponent } from './empatt-six/empatt-six.component';
import { EmpattSevenComponent } from './empatt-seven/empatt-seven.component';
import { EmpattEightComponent } from './empatt-eight/empatt-eight.component';
import { EmpattNineComponent } from './empatt-nine/empatt-nine.component';
import { EmpattTenComponent } from './empatt-ten/empatt-ten.component';
import { EmpattElevenComponent } from './empatt-eleven/empatt-eleven.component';
import { EmpattTwelveComponent } from './empatt-twelve/empatt-twelve.component';
import { EmpattThirteenComponent } from './empatt-thirteen/empatt-thirteen.component';
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
  declarations: [EmpattHomeComponent, EmpattOneComponent, EmpattTwoComponent, EmpattThreeComponent, EmpattFourComponent, EmpattFiveComponent, EmpattSixComponent, EmpattSevenComponent, EmpattEightComponent, EmpattNineComponent, EmpattTenComponent, EmpattElevenComponent, EmpattTwelveComponent, EmpattThirteenComponent],
  imports: [
    CommonModule,
    EmpattRoutingModule,

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
export class EmpattModule { }
