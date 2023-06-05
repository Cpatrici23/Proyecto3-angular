import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoViviendasComponent } from './todo-viviendas/todo-viviendas.component';
import { ViviendaDetalleComponent } from './vivienda-detalle/vivienda-detalle.component';



const routes: Routes = [

  {path: '',
  component:TodoViviendasComponent
},
{
  path:':id',
  component:ViviendaDetalleComponent
},


{
  path:'**', redirectTo: '', pathMatch:'full'
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FellikeRoutingModule { }
