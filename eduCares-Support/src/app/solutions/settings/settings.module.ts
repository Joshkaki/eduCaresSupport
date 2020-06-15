import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsHomeComponent } from './settings-home/settings-home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
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


@NgModule({
  declarations: [
    SettingsHomeComponent,
    SettingsOneComponent,
    SettingsTwoComponent,
    SettingsThreeComponent,
    SettingsFourComponent,
    SettingsFiveComponent,
    SettingsSixComponent,
    SettingsSevenComponent,
    SettingsEightComponent,
    SettingsNineComponent,
    SettingsTenComponent,
    SolutionsElevenComponent,
    SolutionsTwelveComponent,
    SolutionsThirteenComponent,
    SolutionsFourteenComponent,
    SolutionsFifteenComponent,
    SolutionsSixteenComponent,
    SolutionsSeventeenComponent,
    SolutionsEightteenComponent,
    SolutionsNineteenComponent,
    SolutionsTwentyComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,

    MatGridListModule,
    MatDividerModule,
    MatCardModule,
    MDBBootstrapModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatToolbarModule
  ]
})
export class SettingsModule { }
