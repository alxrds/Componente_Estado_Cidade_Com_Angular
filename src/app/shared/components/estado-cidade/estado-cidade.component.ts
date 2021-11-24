import {Component, NgModule, OnInit, Output, EventEmitter, Input} from '@angular/core';

import { EstadoModel } from '../../models/estado.model';
import { CidadeModel } from "../../models/cidade.model";
import { EstadoService } from '../../services/estado.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DxFormModule } from "devextreme-angular/ui/form";
import { DxTextBoxModule } from 'devextreme-angular';
import { DxLoadIndicatorModule } from "devextreme-angular/ui/load-indicator";
import { DxSelectBoxModule } from "devextreme-angular";


@Component({
  selector: 'estado-cidade',
  templateUrl: './estado-cidade.component.html',
  styleUrls: ['./estado-cidade.component.scss']
})

export class EstadoCidadeComponent implements OnInit {

  estados: EstadoModel[] = [];
  cidades: CidadeModel[] = [];

  @Output() estadoUF = new EventEmitter<object>();

  @Input()
  cidadeValue = "";

  @Output()
  cidadeValueChange = new EventEmitter();

  constructor(private estadoService: EstadoService, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.estadoService.getEstados().subscribe(
      resp => this.estados = resp
    );
  }

  siglaNome(item: any) {
    return item && item.sigla + ' - ' + item.nome;
  }

  onValueChangedEstado(event: any) {
    this.httpClient.get<CidadeModel[]>
      (`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ event.value.id }/municipios?orderBy=nome`)
        .subscribe(resp => this.cidades = resp);
    this.estadoUF.emit({sigla: event.value.sigla, nome: event.value.nome});
  }

  onValueChangedCidade(event: any){
    if(event.value.nome === 'Uberlândia'){
      alert('A Sonner fica aqui! :)');
    }
    this.cidadeValueChange.emit(event.value.nome);
  }

}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxSelectBoxModule,
    DxTextBoxModule
  ],
  declarations: [ EstadoCidadeComponent ],
  exports: [ EstadoCidadeComponent ]
})
export class EstadoCidadeModule { }
