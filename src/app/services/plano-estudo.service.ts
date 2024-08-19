import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlanoEstudo } from '../models/plano-estudo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanoEstudoService {
  //api do json-server para as PlanoEstudos
  private apiUrl = 'http://localhost:3000/planosEstudo/';

  constructor(private http: HttpClient) { }

  //metodo que retorna todas as planos de estudo existentes
  getPlanoEstudos(): Observable<PlanoEstudo[]> {
    return this.http.get<PlanoEstudo[]>(this.apiUrl);
  }
  //metodo que vai na rota especifica da planoEstudos e a retorna
  getPlanoEstudoPeloId(planoEstudoId: number): Observable<PlanoEstudo> {
    return this.http.get<PlanoEstudo>(this.apiUrl + planoEstudoId);
  }
}
