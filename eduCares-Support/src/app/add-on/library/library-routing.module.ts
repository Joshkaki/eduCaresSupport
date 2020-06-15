import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryHomeComponent } from './library-home/library-home.component';
import { LibraryOneComponent } from './library-one/library-one.component';
import { LibraryTwoComponent } from './library-two/library-two.component';
import { LibraryThreeComponent } from './library-three/library-three.component';
import { LibraryFourComponent } from './library-four/library-four.component';
import { LibraryFiveComponent } from './library-five/library-five.component';
import { LibrarySixComponent } from './library-six/library-six.component';
import { LibrarySevenComponent } from './library-seven/library-seven.component';
import { LibraryEightComponent } from './library-eight/library-eight.component';
import { LibraryNineComponent } from './library-nine/library-nine.component';
import { LibraryTenComponent } from './library-ten/library-ten.component';
import { LibraryElevenComponent } from './library-eleven/library-eleven.component';
import { LibraryTwelveComponent } from './library-twelve/library-twelve.component';
import { LibraryThreetComponent } from './library-threet/library-threet.component';
import { LibraryFourtComponent } from './library-fourt/library-fourt.component';
import { LibraryFivetComponent } from './library-fivet/library-fivet.component';
import { LibrarySixtComponent } from './library-sixt/library-sixt.component';
import { LibrarySeventComponent } from './library-sevent/library-sevent.component';
import { LibraryEighttComponent } from './library-eightt/library-eightt.component';
import { LibraryNinetComponent } from './library-ninet/library-ninet.component';
import { LibraryTwentyComponent } from './library-twenty/library-twenty.component';
import { LibraryToneComponent } from './library-tone/library-tone.component';
import { LibraryTtwoComponent } from './library-ttwo/library-ttwo.component';
import { LibraryTthreeComponent } from './library-tthree/library-tthree.component';


const routes: Routes = [
  { path: '', component: LibraryHomeComponent },
  { path: 'library-home', component: LibraryHomeComponent },
  { path: 'library-1', component: LibraryOneComponent },
  { path: 'library-2', component: LibraryTwoComponent },
  { path: 'library-3', component: LibraryThreeComponent },
  { path: 'library-4', component: LibraryFourComponent },
  { path: 'library-5', component: LibraryFiveComponent },
  { path: 'library-6', component: LibrarySixComponent },
  { path: 'library-7', component: LibrarySevenComponent },
  { path: 'library-8', component: LibraryEightComponent },
  { path: 'library-9', component: LibraryNineComponent },
  { path: 'library-10', component: LibraryTenComponent },
  { path: 'library-11', component: LibraryElevenComponent },
  { path: 'library-12', component: LibraryTwelveComponent },
  { path: 'library-13', component: LibraryThreetComponent },
  { path: 'library-14', component: LibraryFourtComponent },
  { path: 'library-15', component: LibraryFivetComponent },
  { path: 'library-16', component: LibrarySixtComponent },
  { path: 'library-17', component: LibrarySeventComponent },
  { path: 'library-18', component: LibraryEighttComponent },
  { path: 'library-19', component: LibraryNinetComponent },
  { path: 'library-20', component: LibraryTwentyComponent },
  { path: 'library-21', component: LibraryToneComponent },
  { path: 'library-22', component: LibraryTtwoComponent },
  { path: 'library-23', component: LibraryTthreeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
