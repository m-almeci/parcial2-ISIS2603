import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandaComponent } from './banda.component';
import { bandadetalleComponent } from './banda-detalle/banda-detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BandaComponent, bandadetalleComponent],
  exports: [BandaComponent]
})
export class BandaModule { }
