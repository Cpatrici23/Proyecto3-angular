import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import { FellikeRoutingModule } from './fellike-routing.module';
import { TodoViviendasComponent } from './todo-viviendas/todo-viviendas.component';
import { PlayaViviendasComponent } from './playa-viviendas/playa-viviendas.component';
import { ArbolViviendasComponent } from './arbol-viviendas/arbol-viviendas.component';
import { MontanaViviendasComponent } from './montana-viviendas/montana-viviendas.component';
import { ViviendaDetalleComponent } from './vivienda-detalle/vivienda-detalle.component';
import { AcountComponent } from './acount/acount.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatIconModule} from '@angular/material/icon'
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    TodoViviendasComponent,
    PlayaViviendasComponent,
    ArbolViviendasComponent,
    MontanaViviendasComponent,
    ViviendaDetalleComponent,
    AcountComponent,
    NotFoundComponent

  ],
  imports: [
    CommonModule,
    FellikeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule


  ]
})
export class FellikeModule { }
