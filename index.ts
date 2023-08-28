import { Membro } from "./membro"
import { ContratoBike} from "./contrato"
import { Assinatura } from "./usuario"
import { Bike } from "./bike"

const cliente: Membro = new Membro('Joao da Silva Santos', '123244654-56', '01/01/2000')
const plano: ContratoBike = new ContratoBike('Bike', 0, 0.00, 0 )
const tipoBike: Bike = new Bike('Caloi', 'XMS36', 'Aro-29', 0.00, true)
const contrato: Assinatura = new Assinatura(cliente, plano, ' ')

tipoBike.verificaDisponibilidade(true)
tipoBike.atribuiPreço(1000)
plano.valorContrato(tipoBike.preço, 5)
contrato.assinaContrato(1, tipoBike.disponibilidade)

console.log('Cliente: ', cliente.nome, cliente.dataNascimento, cliente.cpf)
console.log(contrato.contratoAssinado)
console.log('Tipo do contrato: ', plano.codigoProduto, 'R$', plano.valor, plano.tempo)
console.log('Bike escolhida: ', tipoBike.marca, tipoBike.modelo, tipoBike.tamanho, 'Valor', tipoBike.preço)
