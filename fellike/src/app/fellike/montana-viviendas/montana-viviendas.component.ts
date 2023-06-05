import { Component, OnInit } from '@angular/core';
import { FellikeService } from '../services/fellike.service';
import { IVivienda } from '../models/vivienda.model';

@Component({
  selector: 'app-montana-viviendas',
  templateUrl: './montana-viviendas.component.html',
  styleUrls: ['./montana-viviendas.component.css']
})
export class MontanaViviendasComponent implements OnInit{
  mountainHomes : IVivienda[] = []
  constructor(private homeService : FellikeService){}
  ngOnInit() {
  this.homeService.filteredByMountainCategory().subscribe(data => {
    console.log(data)
    this.mountainHomes = data;
  })

  }
}
