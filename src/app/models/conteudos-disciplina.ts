import { Subtitulos } from "./subtitulos"

export class ConteudosDisciplina {
    id!: number
    titulo!: string
    disciplinaId!: number
    descricao!: string
    subtitulos!: Subtitulos[]
}
