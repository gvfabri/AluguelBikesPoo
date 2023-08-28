import { Membro } from "./membro"
import { ContratoBike} from "./contrato"
export class Assinatura{
    assinante: Membro
    plano: ContratoBike
    contratoAssinado: string

    constructor(assinante: Membro, plano: ContratoBike, contratoAssinado: string){
        this.assinante = assinante
        this.plano = plano
        this.contratoAssinado = contratoAssinado
    }

    assinaContrato(verificador:number, disponibilidade: boolean){
        if(verificador === 1 && disponibilidade === true)
        {
            this.contratoAssinado = 'Contratante'
        }
        else
        {
            this.contratoAssinado = 'Não contratante'

        }

    }

}
