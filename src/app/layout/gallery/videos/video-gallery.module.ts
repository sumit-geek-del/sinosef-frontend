import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoGalleryRoutingModule } from './video-gallery-routing.module';
import { VideoGalleryComponent } from './video-gallery.component';


@NgModule({
  declarations: [
    VideoGalleryComponent
  ],
  imports: [
    CommonModule,
    VideoGalleryRoutingModule
  ]
})
export class VideoGalleryModule { }
