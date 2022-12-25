import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OngoingRoutingModule } from './ongoing-routing.module';
import { OngoingComponent } from './ongoing.component';


@NgModule({
  declarations: [
    OngoingComponent
  ],
  imports: [
    CommonModule,
    OngoingRoutingModule
  ]
})
export class OngoingModule { }
