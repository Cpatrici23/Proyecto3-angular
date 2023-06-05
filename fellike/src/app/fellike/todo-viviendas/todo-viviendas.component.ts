import { Component, OnInit } from '@angular/core';
import { IVivienda } from '../models/vivienda.model';
import { FellikeService } from '../services/fellike.service';

@Component({
  selector: 'app-todo-viviendas',
  templateUrl: './todo-viviendas.component.html',
  styleUrls: ['./todo-viviendas.component.css']
})
export class TodoViviendasComponent implements OnInit{
  viviendas : IVivienda[] = []

  constructor(private fellikeService : FellikeService){}

  ngOnInit(): void {
    this.fellikeService.findAll().subscribe(data => {
      console.log(data)
      this.viviendas = data;
      console.log(this.viviendas);

    })
  }


}
