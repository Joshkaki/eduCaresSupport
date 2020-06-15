import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceHomeComponent } from './finance-home/finance-home.component';
import { FinanceOneComponent } from './finance-one/finance-one.component';
import { FinanceTwoComponent } from './finance-two/finance-two.component';
import { FinanceThreeComponent } from './finance-three/finance-three.component';
import { FinanceFourComponent } from './finance-four/finance-four.component';
import { FinanceFiveComponent } from './finance-five/finance-five.component';
import { FinanceSixComponent } from './finance-six/finance-six.component';
import { FinanceSevenComponent } from './finance-seven/finance-seven.component';
import { FinanceEightComponent } from './finance-eight/finance-eight.component';
import { FinanceNineComponent } from './finance-nine/finance-nine.component';
import { FinanceTenComponent } from './finance-ten/finance-ten.component';
import { FinanceElevenComponent } from './finance-eleven/finance-eleven.component';
import { FinanceTwelveComponent } from './finance-twelve/finance-twelve.component';
import { FinanceThreetComponent } from './finance-threet/finance-threet.component';
import { FinanceFourtComponent } from './finance-fourt/finance-fourt.component';
import { FinanceFivetComponent } from './finance-fivet/finance-fivet.component';
import { FinanceSixtComponent } from './finance-sixt/finance-sixt.component';
import { FinanceSeventComponent } from './finance-sevent/finance-sevent.component';
import { FinanceEighttComponent } from './finance-eightt/finance-eightt.component';


const routes: Routes = [
  { path: '', component: FinanceHomeComponent },
  { path: 'finance-home', component: FinanceHomeComponent },
  { path: 'finance-1', component: FinanceOneComponent },
  { path: 'finance-2', component: FinanceTwoComponent },
  { path: 'finance-3', component: FinanceThreeComponent },
  { path: 'finance-4', component: FinanceFourComponent },
  { path: 'finance-5', component: FinanceFiveComponent },
  { path: 'finance-6', component: FinanceSixComponent },
  { path: 'finance-7', component: FinanceSevenComponent },
  { path: 'finance-8', component: FinanceEightComponent },
  { path: 'finance-9', component: FinanceNineComponent },
  { path: 'finance-10', component: FinanceTenComponent },
  { path: 'finance-11', component: FinanceElevenComponent },
  { path: 'finance-12', component: FinanceTwelveComponent },
  { path: 'finance-13', component: FinanceThreetComponent },
  { path: 'finance-14', component: FinanceFourtComponent },
  { path: 'finance-15', component: FinanceFivetComponent },
  { path: 'finance-16', component: FinanceSixtComponent },
  { path: 'finance-17', component: FinanceSeventComponent },
  { path: 'finance-18', component: FinanceEighttComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
