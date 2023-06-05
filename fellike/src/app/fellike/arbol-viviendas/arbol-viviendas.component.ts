import { Component } from '@angular/core';
import { FellikeService } from '../services/fellike.service';
import { IVivienda } from '../models/vivienda.model';

@Component({
  selector: 'app-arbol-viviendas',
  templateUrl: './arbol-viviendas.component.html',
  styleUrls: ['./arbol-viviendas.component.css']
})
export class ArbolViviendasComponent {
  treeHomes : IVivienda[] = []
  constructor(private homeService : FellikeService){}
  ngOnInit() {
  this.homeService.filteredByTreeHomeCategory().subscribe(data => {
    console.log(data)
    this.treeHomes = data;
  })

  }
}
