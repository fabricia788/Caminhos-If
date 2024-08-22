import { ConteudosDisciplina } from "./conteudos-disciplina"
import { Subtitulos } from "./subtitulos"

export class PlanoEstudo {
    id!: number
    titulo!: string
    descricao!: string
    subtitulos!: Subtitulos[]
    conteudosId!: number[]
    horasDuracao!:number;
    disciplinasId?:number[];
}
