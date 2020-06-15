import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryHomeComponent } from './library-home/library-home.component';
import { LibraryOneComponent } from './library-one/library-one.component';
import { LibraryElevenComponent } from './library-eleven/library-eleven.component';
import { LibraryToneComponent } from './library-tone/library-tone.component';
import { LibraryTwoComponent } from './library-two/library-two.component';
import { LibraryTwelveComponent } from './library-twelve/library-twelve.component';
import { LibraryTtwoComponent } from './library-ttwo/library-ttwo.component';
import { LibraryThreeComponent } from './library-three/library-three.component';
import { LibraryThreetComponent } from './library-threet/library-threet.component';
import { LibraryTthreeComponent } from './library-tthree/library-tthree.component';
import { LibraryFourComponent } from './library-four/library-four.component';
import { LibraryFourtComponent } from './library-fourt/library-fourt.component';
import { LibraryFiveComponent } from './library-five/library-five.component';
import { LibraryFivetComponent } from './library-fivet/library-fivet.component';
import { LibrarySixComponent } from './library-six/library-six.component';
import { LibrarySixtComponent } from './library-sixt/library-sixt.component';
import { LibrarySevenComponent } from './library-seven/library-seven.component';
import { LibrarySeventComponent } from './library-sevent/library-sevent.component';
import { LibraryEightComponent } from './library-eight/library-eight.component';
import { LibraryEighttComponent } from './library-eightt/library-eightt.component';
import { LibraryNineComponent } from './library-nine/library-nine.component';
import { LibraryNinetComponent } from './library-ninet/library-ninet.component';
import { LibraryTenComponent } from './library-ten/library-ten.component';
import { LibraryTwentyComponent } from './library-twenty/library-twenty.component';
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
  declarations: [LibraryHomeComponent, LibraryOneComponent, LibraryElevenComponent, LibraryToneComponent, LibraryTwoComponent, LibraryTwelveComponent, LibraryTtwoComponent, LibraryThreeComponent, LibraryThreetComponent, LibraryTthreeComponent, LibraryFourComponent, LibraryFourtComponent, LibraryFiveComponent, LibraryFivetComponent, LibrarySixComponent, LibrarySixtComponent, LibrarySevenComponent, LibrarySeventComponent, LibraryEightComponent, LibraryEighttComponent, LibraryNineComponent, LibraryNinetComponent, LibraryTenComponent, LibraryTwentyComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule,

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
export class LibraryModule { }
