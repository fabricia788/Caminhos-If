import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../../../models/disciplina';
import { ConteudosDisciplina } from '../../../models/conteudos-disciplina';
import { DisciplinaService } from '../../../services/disciplina.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pagina-disciplina',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pagina-disciplina.component.html',
  styleUrl: './pagina-disciplina.component.scss'
})
export class PaginaDisciplinaComponent implements OnInit{
  disciplinaId: number = 0
  disciplinaCarregada!: Disciplina
  conteudosDisciplina!: ConteudosDisciplina[]

  constructor(private disciplina: DisciplinaService, private route: ActivatedRoute){}

  ngOnInit(): void {

    //pega o id da disciplina contido na url
    this.route.paramMap.subscribe(params => {
      this.disciplinaId = Number(params.get('id'));
    });

    //com o id, chama o metodo que retorna o objeto disciplina
    this.disciplina.getDisciplinaPeloId(this.disciplinaId).subscribe(
      (resposta) => {
        this.disciplinaCarregada = resposta;
      },
      (erro) => {
        console.error('Erro ao obter dados da API', erro);
      }
    );

    //com o id, chama o metodo que retorna o objetos conteudos da disciplina.
    this.disciplina.getConteudosPeloIdDisciplina(this.disciplinaId).subscribe(
      (resposta) => {
        this.conteudosDisciplina = resposta;
        console.log(this.conteudosDisciplina);
        
      },
      (erro) => {
        console.error('Erro ao obter dados da API', erro);
      }
    );
  }
}
