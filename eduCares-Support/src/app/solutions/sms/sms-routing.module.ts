import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmsHomeComponent } from './sms-home/sms-home.component';
import { SmsOneComponent } from './sms-one/sms-one.component';
import { SmsTwoComponent } from './sms-two/sms-two.component';
import { SmsThreeComponent } from './sms-three/sms-three.component';
import { SmsFourComponent } from './sms-four/sms-four.component';
import { SmsFiveComponent } from './sms-five/sms-five.component';
import { SmsSixComponent } from './sms-six/sms-six.component';


const routes: Routes = [
  { path: '', component: SmsHomeComponent },
  { path: 'sms-home', component: SmsHomeComponent },
  { path: 'sms-1', component: SmsOneComponent },
  { path: 'sms-2', component: SmsTwoComponent },
  { path: 'sms-3', component: SmsThreeComponent },
  { path: 'sms-4', component: SmsFourComponent },
  { path: 'sms-5', component: SmsFiveComponent },
  { path: 'sms-6', component: SmsSixComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsRoutingModule { }
