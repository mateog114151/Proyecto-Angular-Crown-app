import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CastRoutingModule } from './cast-routing.module';
import { Cast } from './cast/cast.component';

@NgModule({
  declarations: [Cast],
  imports: [CommonModule, CastRoutingModule],
})
export class CastModule {}
