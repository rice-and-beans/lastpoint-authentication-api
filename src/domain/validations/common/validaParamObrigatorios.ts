import { ParamObrigatorioException } from "../../exceptions/ParamObrigatorioException";
import { ValidacaoBase } from "../validacaoBase";

export class ValidaParamObrigatorios extends ValidacaoBase {

    constructor(
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const params = dadosValidacao as Object[];
        params.forEach(umParam => {
            if(!umParam){
                throw new ParamObrigatorioException('Parâmetro: '+umParam+ 'obrigatório, não informado');
            }
        });
    }
    
}