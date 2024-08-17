import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Disciplina } from '../models/disciplina';
import { ConteudosDisciplina } from '../models/conteudos-disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  //api do json-server
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  //metodo que vai na rota 'disciplina' e retorna todas elas
  getDisciplinas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.apiUrl + 'disciplinas');
  }
  //metodo que vai na rota 'disciplina' especifica e a retorna
  getDisciplinaPeloId(disciplinaId: number): Observable<Disciplina> {
    return this.http.get<Disciplina>(this.apiUrl + 'disciplinas/' + disciplinaId);
  }
  //metodo que vai na rota 'conteudos' e retorna todos os conteudos filtrados pelo id da disciplina 
  getConteudosPeloIdDisciplina(disciplinaId: number): Observable<ConteudosDisciplina[]> {
    return this.http.get<ConteudosDisciplina[]>(this.apiUrl + 'conteudos').pipe(
      map(data => data.filter((content: any) => content.disciplinaId === disciplinaId))
    );
  }
}

