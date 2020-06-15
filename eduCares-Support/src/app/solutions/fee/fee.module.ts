import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeeRoutingModule } from './fee-routing.module';
import { FeeHomeComponent } from './fee-home/fee-home.component';
import { FeeOneComponent } from './fee-one/fee-one.component';
import { FeeTwoComponent } from './fee-two/fee-two.component';
import { FeeThreeComponent } from './fee-three/fee-three.component';
import { FeeFourComponent } from './fee-four/fee-four.component';
import { FeeThreetComponent } from './fee-threet/fee-threet.component';
import { FeeFourtComponent } from './fee-fourt/fee-fourt.component';
import { FeeFiveComponent } from './fee-five/fee-five.component';
import { FeeFivetComponent } from './fee-fivet/fee-fivet.component';
import { FeeSixComponent } from './fee-six/fee-six.component';
import { FeeSixtComponent } from './fee-sixt/fee-sixt.component';
import { FeeSevenComponent } from './fee-seven/fee-seven.component';
import { FeeSeventComponent } from './fee-sevent/fee-sevent.component';
import { FeeEightComponent } from './fee-eight/fee-eight.component';
import { FeeNineComponent } from './fee-nine/fee-nine.component';
import { FeeTenComponent } from './fee-ten/fee-ten.component';
import { FeeElevenComponent } from './fee-eleven/fee-eleven.component';
import { FeeTwelveComponent } from './fee-twelve/fee-twelve.component';
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
  declarations: [FeeHomeComponent, FeeOneComponent, FeeTwoComponent, FeeThreeComponent, FeeFourComponent, FeeThreetComponent, FeeFourtComponent, FeeFiveComponent, FeeFivetComponent, FeeSixComponent, FeeSixtComponent, FeeSevenComponent, FeeSeventComponent, FeeEightComponent, FeeNineComponent, FeeTenComponent, FeeElevenComponent, FeeTwelveComponent],
  imports: [
    CommonModule,
    FeeRoutingModule,
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
export class FeeModule {
}
