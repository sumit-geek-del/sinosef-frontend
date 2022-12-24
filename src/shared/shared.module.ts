import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderNavbarComponent } from './navbar/header-navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderNavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[HeaderNavbarComponent, FooterComponent]
})
export class SharedModule { }
