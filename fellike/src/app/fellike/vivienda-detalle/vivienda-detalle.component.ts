import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FellikeService } from '../services/fellike.service';
import { IVivienda } from '../models/vivienda.model';

@Component({
  selector: 'app-vivienda-detalle',
  templateUrl: './vivienda-detalle.component.html',
  styleUrls: ['./vivienda-detalle.component.css']
})
export class ViviendaDetalleComponent implements OnInit{

  home?: IVivienda;

  constructor(private activateRoute: ActivatedRoute, private homeService: FellikeService ){}
  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      this.homeService.findById(id).subscribe(data => this.home = data)
  })
}

reserve(){

}
}
