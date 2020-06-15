import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReminderHomeComponent } from './reminder-home/reminder-home.component';
import { ReminderOneComponent } from './reminder-one/reminder-one.component';
import { ReminderTwoComponent } from './reminder-two/reminder-two.component';
import { ReminderThreeComponent } from './reminder-three/reminder-three.component';
import { ReminderFourComponent } from './reminder-four/reminder-four.component';
import { ReminderFiveComponent } from './reminder-five/reminder-five.component';
import { ReminderSixComponent } from './reminder-six/reminder-six.component';
import { ReminderSevenComponent } from './reminder-seven/reminder-seven.component';
import { ReminderEightComponent } from './reminder-eight/reminder-eight.component';
import { ReminderNineComponent } from './reminder-nine/reminder-nine.component';


const routes: Routes = [
  { path: '', component: ReminderHomeComponent },
  { path: 'reminder-home', component: ReminderHomeComponent },
  { path: 'reminder-1', component: ReminderOneComponent },
  { path: 'reminder-2', component: ReminderTwoComponent },
  { path: 'reminder-3', component: ReminderThreeComponent },
  { path: 'reminder-4', component: ReminderFourComponent },
  { path: 'reminder-5', component: ReminderFiveComponent },
  { path: 'reminder-6', component: ReminderSixComponent },
  { path: 'reminder-7', component: ReminderSevenComponent },
  { path: 'reminder-8', component: ReminderEightComponent },
  { path: 'reminder-9', component: ReminderNineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReminderRoutingModule { }
