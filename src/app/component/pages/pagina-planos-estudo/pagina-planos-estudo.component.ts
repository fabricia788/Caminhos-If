import { Component } from '@angular/core';
import { PlanoEstudo } from '../../../models/plano-estudo';
import { PlanoEstudoService } from '../../../services/plano-estudo.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pagina-planos-estudo',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './pagina-planos-estudo.component.html',
  styleUrl: './pagina-planos-estudo.component.scss'
})
export class PaginaPlanosEstudoComponent {
  planosEstudosCarregados!: PlanoEstudo[]

  constructor(private planosEstudos: PlanoEstudoService){}

  ngOnInit(): void {
    this.planosEstudos.getPlanoEstudos().subscribe(
      (resposta) => {
        this.planosEstudosCarregados = resposta;  
      },
      (erro) => {
        console.error('Erro ao obter dados da API', erro);
      }
    );
  }
}
