import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { ConteudosDisciplina } from '../models/conteudos-disciplina';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConteudoDisciplinaService {
  //api do json-server para os conteudos da disciplina
  private apiUrl = 'http://localhost:3000/conteudos/';

  constructor(private http: HttpClient) { }

  //metodo que retorna todas as conteudos existentes
  getConteudos(): Observable<ConteudosDisciplina[]> {
    return this.http.get<ConteudosDisciplina[]>(this.apiUrl);
  }

  //metodo que vai na rota especifica do conteudo e o retorna
  getConteudoPeloId(id: number): Observable<ConteudosDisciplina> {
    return this.http.get<ConteudosDisciplina>(this.apiUrl + id);
  }

  getConteudosPeloId(ids: number[]): Observable<ConteudosDisciplina[]> {
    const observables = ids.map(id => this.getConteudoPeloId(id));
    return forkJoin(observables).pipe(
      map(conteudos => conteudos.flat()) 
    );
  }
  
  
  //metodo que vai na rota 'conteudos' e retorna todos os conteudos filtrados pelo id da disciplina 
  getConteudosPeloIdDisciplina(disciplinaId: number): Observable<ConteudosDisciplina[]> {
    return this.http.get<ConteudosDisciplina[]>(this.apiUrl).pipe(
      map(data => data.filter((content: ConteudosDisciplina) => content.disciplinaId === disciplinaId))
    );
  }
}