import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollHomeComponent } from './poll-home/poll-home.component';
import { PollOneComponent } from './poll-one/poll-one.component';
import { PollTwoComponent } from './poll-two/poll-two.component';
import { PollThreeComponent } from './poll-three/poll-three.component';
import { PollFiveComponent } from './poll-five/poll-five.component';
import { PollSixComponent } from './poll-six/poll-six.component';
import { PollSevenComponent } from './poll-seven/poll-seven.component';
import { PollFourComponent } from './poll-four/poll-four.component';


const routes: Routes = [
  {path: '', component: PollHomeComponent},
  {path: 'poll-home', component: PollHomeComponent},
  {path: 'poll-1', component: PollOneComponent},
  {path: 'poll-2', component: PollTwoComponent},
  {path: 'poll-3', component: PollThreeComponent},
  {path: 'poll-4', component: PollFourComponent},
  {path: 'poll-5', component: PollFiveComponent},
  {path: 'poll-6', component: PollSixComponent},
  {path: 'poll-7', component: PollSevenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollRoutingModule { }
