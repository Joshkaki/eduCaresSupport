import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  { path: '', component: InventoryHomeComponent },
  { path: 'inventory-home', component: InventoryHomeComponent },
  { path: 'inventory-1', component: InventoryOneComponent },
  { path: 'inventory-2', component: InventoryTwoComponent },
  { path: 'inventory-3', component: InventoryThreeComponent },
  { path: 'inventory-4', component: InventoryFourComponent },
  { path: 'inventory-5', component: InventoryFiveComponent },
  { path: 'inventory-6', component: InventorySixComponent },
  { path: 'inventory-7', component: InventorySevenComponent },
  { path: 'inventory-8', component: InventoryEightComponent },
  { path: 'inventory-9', component: InventoryNineComponent },
  { path: 'inventory-10', component: InventoryTenComponent },
  { path: 'inventory-11', component: InventoryElevenComponent },
  { path: 'inventory-12', component: InventoryTwelveComponent },
  { path: 'inventory-13', component: InventoryThreetComponent },
  { path: 'inventory-14', component: InventoryFourtComponent },
  { path: 'inventory-15', component: InventoryFivetComponent },
  { path: 'inventory-16', component: InventorySixtComponent },
  { path: 'inventory-17', component: InventorySeventComponent },
  { path: 'inventory-18', component: InventoryEighttComponent },
  { path: 'inventory-19', component: InventoryNinetComponent },
  { path: 'inventory-20', component: InventoryTwentyComponent },
  { path: 'inventory-21', component: InventoryToneComponent },
  { path: 'inventory-22', component: InventoryTtwoComponent },
  { path: 'inventory-23', component: InventoryTthreeComponent },
  { path: 'inventory-24', component: InventoryTfourComponent },
  { path: 'inventory-25', component: InventoryTfiveComponent },
  { path: 'inventory-26', component: InventoryTsixComponent },
  { path: 'inventory-27', component: InventoryTsevenComponent },
  { path: 'inventory-28', component: InventoryTeightComponent },
  { path: 'inventory-29', component: InventoryTnineComponent },
  { path: 'inventory-30', component: InventoryThirtyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
