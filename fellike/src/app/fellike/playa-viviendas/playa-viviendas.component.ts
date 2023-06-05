import { Component } from '@angular/core';
import { FellikeService } from '../services/fellike.service';
import { IVivienda } from '../models/vivienda.model';

@Component({
  selector: 'app-playa-viviendas',
  templateUrl: './playa-viviendas.component.html',
  styleUrls: ['./playa-viviendas.component.css']
})
export class PlayaViviendasComponent {
  playaViviendas : IVivienda[] = []
  constructor(private homeService : FellikeService){}
  ngOnInit() {
  this.homeService.filteredByCategory().subscribe(data => {
    console.log(data)
    this.playaViviendas = data;
  })

  }

}
