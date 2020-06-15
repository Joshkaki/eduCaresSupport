import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceHomeComponent } from './finance-home/finance-home.component';
import { FinanceOneComponent } from './finance-one/finance-one.component';
import { FinanceTwoComponent } from './finance-two/finance-two.component';
import { FinanceElevenComponent } from './finance-eleven/finance-eleven.component';
import { FinanceTwelveComponent } from './finance-twelve/finance-twelve.component';
import { FinanceThreeComponent } from './finance-three/finance-three.component';
import { FinanceThreetComponent } from './finance-threet/finance-threet.component';
import { FinanceFourComponent } from './finance-four/finance-four.component';
import { FinanceFourtComponent } from './finance-fourt/finance-fourt.component';
import { FinanceFiveComponent } from './finance-five/finance-five.component';
import { FinanceFivetComponent } from './finance-fivet/finance-fivet.component';
import { FinanceSixComponent } from './finance-six/finance-six.component';
import { FinanceSixtComponent } from './finance-sixt/finance-sixt.component';
import { FinanceSevenComponent } from './finance-seven/finance-seven.component';
import { FinanceSeventComponent } from './finance-sevent/finance-sevent.component';
import { FinanceEightComponent } from './finance-eight/finance-eight.component';
import { FinanceEighttComponent } from './finance-eightt/finance-eightt.component';
import { FinanceNineComponent } from './finance-nine/finance-nine.component';
import { FinanceTenComponent } from './finance-ten/finance-ten.component';
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
  declarations: [FinanceHomeComponent, FinanceOneComponent, FinanceTwoComponent, FinanceElevenComponent, FinanceTwelveComponent, FinanceThreeComponent, FinanceThreetComponent, FinanceFourComponent, FinanceFourtComponent, FinanceFiveComponent, FinanceFivetComponent, FinanceSixComponent, FinanceSixtComponent, FinanceSevenComponent, FinanceSeventComponent, FinanceEightComponent, FinanceEighttComponent, FinanceNineComponent, FinanceTenComponent],
  imports: [
    CommonModule,
    FinanceRoutingModule,

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
export class FinanceModule { }
