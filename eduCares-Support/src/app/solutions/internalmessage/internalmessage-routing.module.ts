import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternalmessageHomeComponent } from './internalmessage-home/internalmessage-home.component';
import { InternalmessageOneComponent } from './internalmessage-one/internalmessage-one.component';
import { InternalmessageTwoComponent } from './internalmessage-two/internalmessage-two.component';
import { InternalmessageThreeComponent } from './internalmessage-three/internalmessage-three.component';
import { InternalmessageFourComponent } from './internalmessage-four/internalmessage-four.component';


const routes: Routes = [
  { path: '', component: InternalmessageHomeComponent },
  { path: 'internalmessage-home', component: InternalmessageHomeComponent },
  { path: 'internalmessage-1', component: InternalmessageOneComponent },
  { path: 'internalmessage-2', component: InternalmessageTwoComponent },
  { path: 'internalmessage-3', component: InternalmessageThreeComponent },
  { path: 'internalmessage-4', component: InternalmessageFourComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalmessageRoutingModule { }
