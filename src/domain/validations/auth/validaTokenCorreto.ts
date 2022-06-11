import { IUsuarioSecurityDTO } from "../../model/usuarioSecurityDTO";
import { ValidacaoBase } from "../ValidacaoBase";

export class ValidaTokenCorreto extends ValidacaoBase {

    constructor(
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const resposta = dadosValidacao as IUsuarioSecurityDTO;
        if(resposta != null && resposta.err != null){
           
        }
    }
    
}