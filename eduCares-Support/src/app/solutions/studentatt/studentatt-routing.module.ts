import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentattHomeComponent } from './studentatt-home/studentatt-home.component';
import { StudentattOneComponent } from './studentatt-one/studentatt-one.component';
import { StudentattTwoComponent } from './studentatt-two/studentatt-two.component';
import { StudentattThreeComponent } from './studentatt-three/studentatt-three.component';
import { StudentattFourComponent } from './studentatt-four/studentatt-four.component';
import { StudentattFiveComponent } from './studentatt-five/studentatt-five.component';
import { StudentattSixComponent } from './studentatt-six/studentatt-six.component';
import { StudentattSevenComponent } from './studentatt-seven/studentatt-seven.component';
import { StudentattEightComponent } from './studentatt-eight/studentatt-eight.component';
import { StudentattNineComponent } from './studentatt-nine/studentatt-nine.component';
import { StudentattTenComponent } from './studentatt-ten/studentatt-ten.component';


const routes: Routes = [
  { path: '', component: StudentattHomeComponent },
  { path: 'studentatt-home', component: StudentattHomeComponent },
  { path: 'studentatt-1', component: StudentattOneComponent },
  { path: 'studentatt-2', component: StudentattTwoComponent },
  { path: 'studentatt-3', component: StudentattThreeComponent },
  { path: 'studentatt-4', component: StudentattFourComponent },
  { path: 'studentatt-5', component: StudentattFiveComponent },
  { path: 'studentatt-6', component: StudentattSixComponent },
  { path: 'studentatt-7', component: StudentattSevenComponent },
  { path: 'studentatt-8', component: StudentattEightComponent },
  { path: 'studentatt-9', component: StudentattNineComponent },
  { path: 'studentatt-10', component: StudentattTenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentattRoutingModule { }
