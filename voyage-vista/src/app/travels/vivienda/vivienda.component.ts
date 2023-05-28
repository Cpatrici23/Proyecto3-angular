import { Component } from '@angular/core';
import { IVivienda } from '../models/vivienda.model';
import {Router} from '@angular/router'
@Component({
  selector: 'app-vivienda',
  templateUrl: './vivienda.component.html',
  styleUrls: ['./vivienda.component.css']
})
export class ViviendaComponent {
  constructor(private router: Router){}
  viviendas: IVivienda[] = []


  ngOnInit() {
    this.viviendas = [
      {isAvailable: true, id:1 ,img:'../../../assets/images/0da70267-d9da-4efb-9123-2714b651c9fd.webp' ,title:'saheli'},
      {isAvailable:false, id:2 ,img: '../../../assets/images/eaf8887f-410f-41e4-be1b-88c2a74fbfcf.webp',title:'kohestani'},
      {isAvailable:true, id:3 ,img: '../../../assets/images/3img.webp',title:'shahri'},
      {isAvailable:false, id:4 ,img: '../../../assets/images/4img.webp',title:'yoga'},
      {isAvailable:false, id:4 ,img: '../../../assets/images/4img.webp',title:'yoga'},
      {isAvailable:false, id:4 ,img: '../../../assets/images/4img.webp',title:'yoga'},


    ]
  }

  navigateToOtherComponent() {
    this.router.navigateByUrl('/playa');
  }


}
