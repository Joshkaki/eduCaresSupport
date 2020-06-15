import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermanageRoutingModule } from './usermanage-routing.module';
import { UsermanageHomeComponent } from './usermanage-home/usermanage-home.component';
import { UsermanageOneComponent } from './usermanage-one/usermanage-one.component';
import { UsermanageTwoComponent } from './usermanage-two/usermanage-two.component';
import { UsermanageThreeComponent } from './usermanage-three/usermanage-three.component';
import { UsermanageFourComponent } from './usermanage-four/usermanage-four.component';
import { UsermanageFiveComponent } from './usermanage-five/usermanage-five.component';
import { UsermanageSixComponent } from './usermanage-six/usermanage-six.component';
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
  declarations: [UsermanageHomeComponent, UsermanageOneComponent, UsermanageTwoComponent, UsermanageThreeComponent, UsermanageFourComponent, UsermanageFiveComponent, UsermanageSixComponent],
  imports: [
    CommonModule,
    UsermanageRoutingModule,

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
export class UsermanageModule { }
