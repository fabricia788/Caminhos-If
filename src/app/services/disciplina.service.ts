import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disciplina } from '../models/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  //api do json-server para as disciplinas
  private apiUrl = 'http://localhost:3000/disciplinas/';

  constructor(private http: HttpClient) { }

  //metodo que retorna todas as disciplinas existentes
  getDisciplinas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.apiUrl);
  }
  //metodo que vai na rota especifica da disciplina e a retorna
  getDisciplinaPeloId(disciplinaId: number): Observable<Disciplina> {
    return this.http.get<Disciplina>(this.apiUrl + disciplinaId);
  }
}

