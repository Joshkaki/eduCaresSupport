import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentrollnumHomeComponent } from './studentrollnum-home/studentrollnum-home.component';
import { StudentrollnumOneComponent } from './studentrollnum-one/studentrollnum-one.component';
import { StudentrollnumTwoComponent } from './studentrollnum-two/studentrollnum-two.component';
import { StudentrollnumThreeComponent } from './studentrollnum-three/studentrollnum-three.component';
import { StudentrollnumFourComponent } from './studentrollnum-four/studentrollnum-four.component';
import { StudentrollnumFiveComponent } from './studentrollnum-five/studentrollnum-five.component';
import { StudentrollnumSixComponent } from './studentrollnum-six/studentrollnum-six.component';
import { StudentrollnumSevenComponent } from './studentrollnum-seven/studentrollnum-seven.component';
import { StudentrollnumEightComponent } from './studentrollnum-eight/studentrollnum-eight.component';


const routes: Routes = [
  { path: '', component: StudentrollnumHomeComponent },
  { path: 'studentrollnum-home', component: StudentrollnumHomeComponent },
  { path: 'studentrollnum-1', component: StudentrollnumOneComponent },
  { path: 'studentrollnum-2', component: StudentrollnumTwoComponent },
  { path: 'studentrollnum-3', component: StudentrollnumThreeComponent },
  { path: 'studentrollnum-4', component: StudentrollnumFourComponent },
  { path: 'studentrollnum-5', component: StudentrollnumFiveComponent },
  { path: 'studentrollnum-6', component: StudentrollnumSixComponent },
  { path: 'studentrollnum-7', component: StudentrollnumSevenComponent },
  { path: 'studentrollnum-8', component: StudentrollnumEightComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentrollnumRoutingModule { }
