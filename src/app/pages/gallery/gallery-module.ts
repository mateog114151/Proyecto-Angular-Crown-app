import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing-module';
import { Gallery } from './gallery/gallery';

@NgModule({
  declarations: [Gallery],
  imports: [CommonModule, GalleryRoutingModule],
})
export class GalleryModule {}
