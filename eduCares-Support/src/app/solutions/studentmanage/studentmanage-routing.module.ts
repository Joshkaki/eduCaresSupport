import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  { path: '', component: StudmangHomeComponent },
  { path: 'studentmanage-home', component: StudmangHomeComponent },
  { path: 'studentmanage-1', component: StudmangOneComponent },
  { path: 'studentmanage-2', component: StudmangTwoComponent },
  { path: 'studentmanage-3', component: StudmangThreeComponent },
  { path: 'studentmanage-4', component: StudmangFourComponent },
  { path: 'studentmanage-5', component: StudmangFiveComponent },
  { path: 'studentmanage-6', component: StudmangSixComponent },
  { path: 'studentmanage-7', component: StudmangSevenComponent },
  { path: 'studentmanage-8', component: StudmangEightComponent },
  { path: 'studentmanage-9', component: StudmangNineComponent },
  { path: 'studentmanage-10', component: StudmangTenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentmanageRoutingModule { }
