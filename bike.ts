export class Bike{
    marca: string
    modelo: string
    tamanho: string
    preço: number
    disponibilidade: boolean

    constructor(marca: string, modelo:string, tamanho: string, preço: number, disponibilidade: boolean){
        this.marca = marca
        this.modelo = modelo
        this.tamanho = tamanho
        this.preço = preço
        this.disponibilidade = disponibilidade
    }

    atribuiPreço(preco:number){
        this.preço = preco
    }

    verificaDisponibilidade(disposicao: boolean){
        if(disposicao === true){
            this.disponibilidade = true
        }
        else{
            this.disponibilidade = false
        }
    }

}