import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsermanageHomeComponent } from './usermanage-home/usermanage-home.component';
import { UsermanageOneComponent } from './usermanage-one/usermanage-one.component';
import { UsermanageTwoComponent } from './usermanage-two/usermanage-two.component';
import { UsermanageThreeComponent } from './usermanage-three/usermanage-three.component';
import { UsermanageFourComponent } from './usermanage-four/usermanage-four.component';
import { UsermanageFiveComponent } from './usermanage-five/usermanage-five.component';
import { UsermanageSixComponent } from './usermanage-six/usermanage-six.component';


const routes: Routes = [
  { path: '', component: UsermanageHomeComponent },
  { path: 'usermanage-home', component: UsermanageHomeComponent },
  { path: 'usermanage-1', component: UsermanageOneComponent },
  { path: 'usermanage-2', component: UsermanageTwoComponent },
  { path: 'usermanage-3', component: UsermanageThreeComponent },
  { path: 'usermanage-4', component: UsermanageFourComponent },
  { path: 'usermanage-5', component: UsermanageFiveComponent },
  { path: 'usermanage-6', component: UsermanageSixComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermanageRoutingModule { }
