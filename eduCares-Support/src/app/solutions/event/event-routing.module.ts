import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventHomeComponent } from './event-home/event-home.component';
import { EventOneComponent } from './event-one/event-one.component';
import { EventTwoComponent } from './event-two/event-two.component';
import { EventThreeComponent } from './event-three/event-three.component';


const routes: Routes = [
  { path: '', component: EventHomeComponent },
  { path: 'event-home', component: EventHomeComponent },
  { path: 'event-1', component: EventOneComponent },
  { path: 'event-2', component: EventTwoComponent },
  { path: 'event-3', component: EventThreeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
