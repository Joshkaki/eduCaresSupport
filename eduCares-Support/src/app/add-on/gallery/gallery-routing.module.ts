import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryHomeComponent } from './gallery-home/gallery-home.component';
import { GalleryOneComponent } from './gallery-one/gallery-one.component';
import { GalleryTwoComponent } from './gallery-two/gallery-two.component';
import { GalleryThreeComponent } from './gallery-three/gallery-three.component';
import { GalleryFiveComponent } from './gallery-five/gallery-five.component';
import { GallerySixComponent } from './gallery-six/gallery-six.component';
import { GallerySevenComponent } from './gallery-seven/gallery-seven.component';
import { GalleryEightComponent } from './gallery-eight/gallery-eight.component';
import { GalleryNineComponent } from './gallery-nine/gallery-nine.component';
import { GalleryTenComponent } from './gallery-ten/gallery-ten.component';
import { GalleryFourComponent } from './gallery-four/gallery-four.component';


const routes: Routes = [
  { path: '', component: GalleryHomeComponent },
  { path: 'gallery-home', component: GalleryHomeComponent },
  { path: 'gallery-1', component: GalleryOneComponent },
  { path: 'gallery-2', component: GalleryTwoComponent },
  { path: 'gallery-3', component: GalleryThreeComponent },
  { path: 'gallery-4', component: GalleryFourComponent },
  { path: 'gallery-5', component: GalleryFiveComponent },
  { path: 'gallery-6', component: GallerySixComponent },
  { path: 'gallery-7', component: GallerySevenComponent },
  { path: 'gallery-8', component: GalleryEightComponent },
  { path: 'gallery-9', component: GalleryNineComponent },
  { path: 'gallery-10', component: GalleryTenComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
