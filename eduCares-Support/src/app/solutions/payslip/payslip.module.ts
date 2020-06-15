import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayslipRoutingModule } from './payslip-routing.module';
import { PayslipHomeComponent } from './payslip-home/payslip-home.component';
import { PayslipOneComponent } from './payslip-one/payslip-one.component';
import { PayslipTwoComponent } from './payslip-two/payslip-two.component';
import { PayslipThreeComponent } from './payslip-three/payslip-three.component';
import { PayslipFourComponent } from './payslip-four/payslip-four.component';
import { PayslipFiveComponent } from './payslip-five/payslip-five.component';
import { PayslipSixComponent } from './payslip-six/payslip-six.component';
import { PayslipSevenComponent } from './payslip-seven/payslip-seven.component';
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
  declarations: [PayslipHomeComponent, PayslipOneComponent, PayslipTwoComponent, PayslipThreeComponent, PayslipFourComponent, PayslipFiveComponent, PayslipSixComponent, PayslipSevenComponent],
  imports: [
    CommonModule,
    PayslipRoutingModule,

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
export class PayslipModule { }
