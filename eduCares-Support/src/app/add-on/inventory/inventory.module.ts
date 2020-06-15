import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component';
import { InventoryOneComponent } from './inventory-one/inventory-one.component';
import { InventoryTwoComponent } from './inventory-two/inventory-two.component';
import { InventoryThreeComponent } from './inventory-three/inventory-three.component';
import { InventoryFourComponent } from './inventory-four/inventory-four.component';
import { InventoryFiveComponent } from './inventory-five/inventory-five.component';
import { InventorySixComponent } from './inventory-six/inventory-six.component';
import { InventorySevenComponent } from './inventory-seven/inventory-seven.component';
import { InventoryEightComponent } from './inventory-eight/inventory-eight.component';
import { InventoryNineComponent } from './inventory-nine/inventory-nine.component';
import { InventoryTenComponent } from './inventory-ten/inventory-ten.component';
import { InventoryElevenComponent } from './inventory-eleven/inventory-eleven.component';
import { InventoryTwelveComponent } from './inventory-twelve/inventory-twelve.component';
import { InventoryThreetComponent } from './inventory-threet/inventory-threet.component';
import { InventoryFourtComponent } from './inventory-fourt/inventory-fourt.component';
import { InventoryFivetComponent } from './inventory-fivet/inventory-fivet.component';
import { InventorySixtComponent } from './inventory-sixt/inventory-sixt.component';
import { InventorySeventComponent } from './inventory-sevent/inventory-sevent.component';
import { InventoryEighttComponent } from './inventory-eightt/inventory-eightt.component';
import { InventoryNinetComponent } from './inventory-ninet/inventory-ninet.component';
import { InventoryTwentyComponent } from './inventory-twenty/inventory-twenty.component';
import { InventoryToneComponent } from './inventory-tone/inventory-tone.component';
import { InventoryTtwoComponent } from './inventory-ttwo/inventory-ttwo.component';
import { InventoryTthreeComponent } from './inventory-tthree/inventory-tthree.component';
import { InventoryTfourComponent } from './inventory-tfour/inventory-tfour.component';
import { InventoryTfiveComponent } from './inventory-tfive/inventory-tfive.component';
import { InventoryTsixComponent } from './inventory-tsix/inventory-tsix.component';
import { InventoryTsevenComponent } from './inventory-tseven/inventory-tseven.component';
import { InventoryTeightComponent } from './inventory-teight/inventory-teight.component';
import { InventoryTnineComponent } from './inventory-tnine/inventory-tnine.component';
import { InventoryThirtyComponent } from './inventory-thirty/inventory-thirty.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [InventoryHomeComponent, InventoryOneComponent, InventoryTwoComponent, InventoryThreeComponent, InventoryFourComponent, InventoryFiveComponent, InventorySixComponent, InventorySevenComponent, InventoryEightComponent, InventoryNineComponent, InventoryTenComponent, InventoryElevenComponent, InventoryTwelveComponent, InventoryThreetComponent, InventoryFourtComponent, InventoryFivetComponent, InventorySixtComponent, InventorySeventComponent, InventoryEighttComponent, InventoryNinetComponent, InventoryTwentyComponent, InventoryToneComponent, InventoryTtwoComponent, InventoryTthreeComponent, InventoryTfourComponent, InventoryTfiveComponent, InventoryTsixComponent, InventoryTsevenComponent, InventoryTeightComponent, InventoryTnineComponent, InventoryThirtyComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,

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
export class InventoryModule { }
