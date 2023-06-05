import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayaViviendasComponent } from './fellike/playa-viviendas/playa-viviendas.component';
import { ArbolViviendasComponent } from './fellike/arbol-viviendas/arbol-viviendas.component';
import { MontanaViviendasComponent } from './fellike/montana-viviendas/montana-viviendas.component';
import { LoginComponent } from './layout/login/login.component';
import { AcountComponent } from './fellike/acount/acount.component';

const routes: Routes = [

  {
    path: 'todo-viviendas',
    loadChildren:() => import('./fellike/fellike.module').then(m => m.FellikeModule)
  },
  {
    path:'playa-viviendas', component:PlayaViviendasComponent
  },
  {
    path:'arbol-viviendas', component:ArbolViviendasComponent
  },
  {
    path:'montana-viviendas', component:MontanaViviendasComponent
  },
  {
    path:'account', component:AcountComponent
  },

  {
    path:'', redirectTo:'todo-viviendas', pathMatch: 'full'
  },
  {
    path:'**', redirectTo:'todo-viviendas', pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
