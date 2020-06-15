import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayslipHomeComponent } from './payslip-home/payslip-home.component';
import { PayslipOneComponent } from './payslip-one/payslip-one.component';
import { PayslipTwoComponent } from './payslip-two/payslip-two.component';
import { PayslipThreeComponent } from './payslip-three/payslip-three.component';
import { PayslipFourComponent } from './payslip-four/payslip-four.component';
import { PayslipFiveComponent } from './payslip-five/payslip-five.component';
import { PayslipSixComponent } from './payslip-six/payslip-six.component';
import { PayslipSevenComponent } from './payslip-seven/payslip-seven.component';


const routes: Routes = [
  { path: '', component: PayslipHomeComponent },
  { path: 'payslip-home', component: PayslipHomeComponent },
  { path: 'payslip-1', component: PayslipOneComponent },
  { path: 'payslip-2', component: PayslipTwoComponent },
  { path: 'payslip-3', component: PayslipThreeComponent },
  { path: 'payslip-4', component: PayslipFourComponent },
  { path: 'payslip-5', component: PayslipFiveComponent },
  { path: 'payslip-6', component: PayslipSixComponent },
  { path: 'payslip-7', component: PayslipSevenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayslipRoutingModule { }
