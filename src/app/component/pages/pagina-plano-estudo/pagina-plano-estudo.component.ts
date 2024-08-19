import { Component } from '@angular/core';
import { PlanoEstudo } from '../../../models/plano-estudo';
import { ConteudosDisciplina } from '../../../models/conteudos-disciplina';
import { PlanoEstudoService } from '../../../services/plano-estudo.service';
import { ConteudoDisciplinaService } from '../../../services/conteudo-disciplina.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pagina-plano-estudo',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './pagina-plano-estudo.component.html',
  styleUrl: './pagina-plano-estudo.component.scss'
})
export class PaginaPlanoEstudoComponent {
  planoEstudoId: number = 0;
  planoEstudoCarregado!: PlanoEstudo;
  conteudosPlanoEstudo!: ConteudosDisciplina[];

  constructor(
    private planoEstudo: PlanoEstudoService,
    private conteudos: ConteudoDisciplinaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // pega o id do plano contido na url
    this.route.paramMap.subscribe(params => {
      this.planoEstudoId = Number(params.get('id'));
    });

    //com o id, chama o metodo que retorna o objeto disciplina
    this.planoEstudo.getPlanoEstudoPeloId(this.planoEstudoId).subscribe(
      (resposta) => {
        this.planoEstudoCarregado = resposta;
        
        this.conteudos.getConteudosPeloId(this.planoEstudoCarregado.conteudosId).subscribe(  
          (resposta) => {
            console.log(this.planoEstudoCarregado.conteudosId);
            this.conteudosPlanoEstudo = resposta;

          },
          (erro) => {
            console.error('Erro ao obter dados da API', erro);
          }
        );
      },
      (erro) => {
        console.error('Erro ao obter dados da API', erro);
      }
    );

    //com o id, chama o metodo que retorna o objetos conteudos da disciplina.

  }
}
