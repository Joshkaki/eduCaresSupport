import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemesHomeComponent } from './themes-home/themes-home.component';
import { ThemesOneComponent } from './themes-one/themes-one.component';
import { ThemesTwoComponent } from './themes-two/themes-two.component';


const routes: Routes = [
  { path: '', component: ThemesHomeComponent},
  { path: 'themes', component: ThemesHomeComponent},
  { path: 'themes-1', component: ThemesOneComponent},
  { path: 'themes-2', component: ThemesTwoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemesRoutingModule { }
