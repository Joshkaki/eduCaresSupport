import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentmanageRoutingModule } from './studentmanage-routing.module';
import { StudmangHomeComponent } from './studmang-home/studmang-home.component';
import { StudmangOneComponent } from './studmang-one/studmang-one.component';
import { StudmangTwoComponent } from './studmang-two/studmang-two.component';
import { StudmangThreeComponent } from './studmang-three/studmang-three.component';
import { StudmangFourComponent } from './studmang-four/studmang-four.component';
import { StudmangFiveComponent } from './studmang-five/studmang-five.component';
import { StudmangSixComponent } from './studmang-six/studmang-six.component';
import { StudmangSevenComponent } from './studmang-seven/studmang-seven.component';
import { StudmangEightComponent } from './studmang-eight/studmang-eight.component';
import { StudmangNineComponent } from './studmang-nine/studmang-nine.component';
import { StudmangTenComponent } from './studmang-ten/studmang-ten.component';
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
  declarations: [StudmangHomeComponent, StudmangOneComponent, StudmangTwoComponent, StudmangThreeComponent, StudmangFourComponent, StudmangFiveComponent, StudmangSixComponent, StudmangSevenComponent, StudmangEightComponent, StudmangNineComponent, StudmangTenComponent],
  imports: [
    CommonModule,
    StudentmanageRoutingModule,

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
export class StudentmanageModule { }
