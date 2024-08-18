import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../../../services/disciplina.service';
import { CommonModule, NgFor } from '@angular/common';
import { Disciplina } from '../../../models/disciplina';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina-disciplinas',
  standalone: true,
  imports: [CommonModule, NgFor, RouterLink],
  templateUrl: './pagina-disciplinas.component.html',
  styleUrl: './pagina-disciplinas.component.scss'
})
export class PaginaDisciplinasComponent implements OnInit {
  disciplinasCarregadas!: Disciplina[];

  constructor(private disciplinas: DisciplinaService){}

  ngOnInit(): void {
    this.disciplinas.getDisciplinas().subscribe(
      (resposta) => {
        this.disciplinasCarregadas = resposta;  
      },
      (erro) => {
        console.error('Erro ao obter dados da API', erro);
      }
    );
  }
}
