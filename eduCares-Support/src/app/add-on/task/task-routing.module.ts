import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskOneComponent } from './task-one/task-one.component';
import { TaskTwoComponent } from './task-two/task-two.component';
import { TaskThreeComponent } from './task-three/task-three.component';
import { TaskFourComponent } from './task-four/task-four.component';
import { TaskFiveComponent } from './task-five/task-five.component';
import { TaskSixComponent } from './task-six/task-six.component';
import { TaskSevenComponent } from './task-seven/task-seven.component';
import { TaskEightComponent } from './task-eight/task-eight.component';


const routes: Routes = [
  { path: '', component: TaskHomeComponent },
  { path: 'task-home', component: TaskHomeComponent },
  { path: 'task-1', component: TaskOneComponent },
  { path: 'task-2', component: TaskTwoComponent },
  { path: 'task-3', component: TaskThreeComponent },
  { path: 'task-4', component: TaskFourComponent },
  { path: 'task-5', component: TaskFiveComponent },
  { path: 'task-6', component: TaskSixComponent },
  { path: 'task-7', component: TaskSevenComponent },
  { path: 'task-8', component: TaskEightComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
