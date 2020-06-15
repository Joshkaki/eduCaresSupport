import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionsRoutingModule } from './solutions-routing.module';
import { TrailComponent } from './trail/trail.component';


@NgModule({
  declarations: [TrailComponent],
  imports: [
    CommonModule,
    SolutionsRoutingModule
  ]
})
export class SolutionsModule { }
