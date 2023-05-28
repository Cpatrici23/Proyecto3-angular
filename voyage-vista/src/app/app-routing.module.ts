import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViviendaComponent } from './travels/vivienda/vivienda.component';
import { ViajeroComponent } from './travels/viajero/viajero.component';
import { PropietorioComponent } from './travels/propietorio/propietorio.component';
import { PlayaComponent } from './travels/playa/playa.component';
import { MontanaComponent } from './travels/montana/montana.component';
import { CapitalComponent } from './travels/capital/capital.component';

const routes: Routes = [
  {path:'vivienda' , component: ViviendaComponent},
  {path:'viajero', component:ViajeroComponent},
  {path:'playa' , component:PlayaComponent},
  {path:'montana' , component:MontanaComponent},
  {path:'capital', component:CapitalComponent},
  {path:'propietorio', component:PropietorioComponent},
  {path:'', redirectTo:'/vivienda', pathMatch:'full'},
  {path:'**', redirectTo:'/vivienda', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
