import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnqregisRoutingModule } from './enqregis-routing.module';
import { EnqregisHomeComponent } from './enqregis-home/enqregis-home.component';
import { EnqregisOneComponent } from './enqregis-one/enqregis-one.component';
import { EnqregisTwoComponent } from './enqregis-two/enqregis-two.component';
import { EnqregisThreeComponent } from './enqregis-three/enqregis-three.component';
import { EnqregisFourComponent } from './enqregis-four/enqregis-four.component';
import { EnqregisFiveComponent } from './enqregis-five/enqregis-five.component';
import { EnqregisSixComponent } from './enqregis-six/enqregis-six.component';
import { EnqregisSevenComponent } from './enqregis-seven/enqregis-seven.component';
import { EnqregisEightComponent } from './enqregis-eight/enqregis-eight.component';
import { EnqregisNineComponent } from './enqregis-nine/enqregis-nine.component';
import { EnqregisTenComponent } from './enqregis-ten/enqregis-ten.component';
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
  declarations: [EnqregisHomeComponent, EnqregisOneComponent, EnqregisTwoComponent, EnqregisThreeComponent, EnqregisFourComponent, EnqregisFiveComponent, EnqregisSixComponent, EnqregisSevenComponent, EnqregisEightComponent, EnqregisNineComponent, EnqregisTenComponent],
  imports: [
    CommonModule,
    EnqregisRoutingModule,

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
export class EnqregisModule { }
