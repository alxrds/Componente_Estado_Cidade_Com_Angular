import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl:'./componente.component.html',
  styleUrls: ['./componente.component.scss']
})
export class ComponenteComponent implements OnInit {

  estadoPage: string = '';
  cidadePage: string = '';

  constructor() { }

  ngOnInit(): void { }

  onEstado(event: any){
    this.cidadePage = '';
    this.estadoPage = event.sigla + ' - ' + event.nome;
  }


}
