import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryHomeComponent } from './gallery-home/gallery-home.component';
import { GalleryOneComponent } from './gallery-one/gallery-one.component';
import { GalleryTwoComponent } from './gallery-two/gallery-two.component';
import { GalleryThreeComponent } from './gallery-three/gallery-three.component';
import { GalleryFourComponent } from './gallery-four/gallery-four.component';
import { GalleryFiveComponent } from './gallery-five/gallery-five.component';
import { GallerySixComponent } from './gallery-six/gallery-six.component';
import { GallerySevenComponent } from './gallery-seven/gallery-seven.component';
import { GalleryEightComponent } from './gallery-eight/gallery-eight.component';
import { GalleryNineComponent } from './gallery-nine/gallery-nine.component';
import { GalleryTenComponent } from './gallery-ten/gallery-ten.component';
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
  declarations: [GalleryHomeComponent, GalleryOneComponent, GalleryTwoComponent, GalleryThreeComponent, GalleryFourComponent, GalleryFiveComponent, GallerySixComponent, GallerySevenComponent, GalleryEightComponent, GalleryNineComponent, GalleryTenComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,

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
export class GalleryModule { }
