import { Component, OnInit } from '@angular/core';
import { ConteudosDisciplina } from '../../../models/conteudos-disciplina';
import { ConteudoDisciplinaService } from '../../../services/conteudo-disciplina.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pagina-conteudo-disciplina',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './pagina-conteudo-disciplina.component.html',
  styleUrl: './pagina-conteudo-disciplina.component.scss'
})
export class PaginaConteudoDisciplinaComponent implements OnInit {
  conteudoDisciplinaId: number = 0
  conteudoDisciplinaCarregado!: ConteudosDisciplina
  subItemVideoUrls: SafeResourceUrl[] = []
  temVideo: boolean = true

  constructor(private conteudo: ConteudoDisciplinaService, private route: ActivatedRoute, private sanitizer: DomSanitizer){}
  ngOnInit(): void {

    //pega o id da conteudo contido na url
    this.route.paramMap.subscribe(params => {
      this.conteudoDisciplinaId = Number(params.get('id'));
    });

    //com o id, chama o metodo que retorna o objeto conteudo
    this.conteudo.getConteudoPeloId(this.conteudoDisciplinaId).subscribe(
      (resposta) => {
        this.conteudoDisciplinaCarregado = resposta;
        this.subItemVideoUrls = resposta.subtitulos.map(subtitulo =>
          this.sanitizer.bypassSecurityTrustResourceUrl(
            subtitulo.videoUrl
          )
        );
      },
      (erro) => {
        console.error('Erro ao obter dados da API', erro);
      }
    );
  }
  extractVideoId(url: string): string {
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : '';
  }
}
