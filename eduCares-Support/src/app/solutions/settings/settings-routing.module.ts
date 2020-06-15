import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsHomeComponent } from './settings-home/settings-home.component';
import { SettingsOneComponent } from './settings-one/settings-one.component';
import { SettingsTwoComponent } from './settings-two/settings-two.component';
import { SettingsThreeComponent } from './settings-three/settings-three.component';
import { SettingsFourComponent } from './settings-four/settings-four.component';
import { SettingsFiveComponent } from './settings-five/settings-five.component';
import { SettingsSixComponent } from './settings-six/settings-six.component';
import { SettingsSevenComponent } from './settings-seven/settings-seven.component';
import { SettingsEightComponent } from './settings-eight/settings-eight.component';
import { SettingsNineComponent } from './settings-nine/settings-nine.component';
import { SettingsTenComponent } from './settings-ten/settings-ten.component';
import { SolutionsElevenComponent } from './solutions-eleven/solutions-eleven.component';
import { SolutionsTwelveComponent } from './solutions-twelve/solutions-twelve.component';
import { SolutionsThirteenComponent } from './solutions-thirteen/solutions-thirteen.component';
import { SolutionsFourteenComponent } from './solutions-fourteen/solutions-fourteen.component';
import { SolutionsFifteenComponent } from './solutions-fifteen/solutions-fifteen.component';
import { SolutionsSixteenComponent } from './solutions-sixteen/solutions-sixteen.component';
import { SolutionsSeventeenComponent } from './solutions-seventeen/solutions-seventeen.component';
import { SolutionsEightteenComponent } from './solutions-eightteen/solutions-eightteen.component';
import { SolutionsNineteenComponent } from './solutions-nineteen/solutions-nineteen.component';
import { SolutionsTwentyComponent } from './solutions-twenty/solutions-twenty.component';


const routes: Routes = [
  { path: '', component: SettingsHomeComponent },
  { path: 'settings-home', component: SettingsHomeComponent },
  { path: 'settings-1', component: SettingsOneComponent },
  { path: 'settings-2', component: SettingsTwoComponent },
  { path: 'settings-3', component: SettingsThreeComponent },
  { path: 'settings-4', component: SettingsFourComponent },
  { path: 'settings-5', component: SettingsFiveComponent },
  { path: 'settings-6', component: SettingsSixComponent },
  { path: 'settings-7', component: SettingsSevenComponent },
  { path: 'settings-8', component: SettingsEightComponent },
  { path: 'settings-9', component: SettingsNineComponent },
  { path: 'settings-10', component: SettingsTenComponent },
  { path: 'settings-11', component: SolutionsElevenComponent },
  { path: 'settings-12', component: SolutionsTwelveComponent },
  { path: 'settings-13', component: SolutionsThirteenComponent },
  { path: 'settings-14', component: SolutionsFourteenComponent },
  { path: 'settings-15', component: SolutionsFifteenComponent },
  { path: 'settings-16', component: SolutionsSixteenComponent },
  { path: 'settings-17', component: SolutionsSeventeenComponent },
  { path: 'settings-18', component: SolutionsEightteenComponent },
  { path: 'settings-19', component: SolutionsNineteenComponent },
  { path: 'settings-20', component: SolutionsTwentyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
