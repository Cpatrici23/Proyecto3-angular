import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViviendaComponent } from './vivienda/vivienda.component';
import { PropietorioComponent } from './propietorio/propietorio.component';
import { ViajeroComponent } from './viajero/viajero.component';
import {MatIconModule} from '@angular/material/icon';
import { PlayaComponent } from './playa/playa.component';
import { CapitalComponent } from './capital/capital.component';
import { MontanaComponent } from './montana/montana.component';


@NgModule({
  declarations: [
    ViviendaComponent,
    PropietorioComponent,
    ViajeroComponent,
    PlayaComponent,
    CapitalComponent,
    MontanaComponent


  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class TravelsModule { }
