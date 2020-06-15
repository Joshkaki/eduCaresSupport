import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscussionHomeComponent } from './discussion-home/discussion-home.component';
import { DiscussionOneComponent } from './discussion-one/discussion-one.component';
import { DiscussionTwoComponent } from './discussion-two/discussion-two.component';
import { DiscussionThreeComponent } from './discussion-three/discussion-three.component';
import { DiscussionFourComponent } from './discussion-four/discussion-four.component';
import { DiscussionFiveComponent } from './discussion-five/discussion-five.component';
import { DiscussionSixComponent } from './discussion-six/discussion-six.component';


const routes: Routes = [
  { path: '', component: DiscussionHomeComponent },
  { path: 'discussion-home', component: DiscussionHomeComponent },
  { path: 'discussion-1', component: DiscussionOneComponent },
  { path: 'discussion-2', component: DiscussionTwoComponent },
  { path: 'discussion-3', component: DiscussionThreeComponent },
  { path: 'discussion-4', component: DiscussionFourComponent },
  { path: 'discussion-5', component: DiscussionFiveComponent },
  { path: 'discussion-6', component: DiscussionSixComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscussionRoutingModule { }
