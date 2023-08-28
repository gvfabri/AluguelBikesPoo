
export class ContratoBike{
    codigoProduto: number
    valor: number
    tempo: number

    constructor(tipoBike: string, codigoProduto: number, valor: number, tempo: number ){
        this.codigoProduto = codigoProduto
        this.valor = valor
        this.tempo = tempo
    }

    valorContrato(valor: number, temp: number ){
        if(valor >= 1000){
            this.codigoProduto = 10000
            this.valor = valor * 0.025 * temp
            this.tempo = temp
        }
        else{
            this.codigoProduto = 20000
            this.valor = valor * 0.010 * temp
            this.tempo = temp
        }
    }


}
