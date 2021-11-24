import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EstadoModel } from '../models/estado.model';

@Injectable({
  providedIn: 'root'
})

export class EstadoService {

  constructor(private http:HttpClient) { }

  readonly UF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';

  getEstados(): Observable<EstadoModel[]> {
    return this.http.get<EstadoModel[]>(this.UF);
  }

}
