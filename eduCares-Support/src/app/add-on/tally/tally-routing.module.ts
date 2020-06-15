import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TallyHomeComponent } from './tally-home/tally-home.component';
import { TallyOneComponent } from './tally-one/tally-one.component';


const routes: Routes = [
  { path: '', component: TallyHomeComponent },
  { path: 'tally-home', component: TallyHomeComponent },
  { path: 'tally-1', component: TallyOneComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TallyRoutingModule { }
