import { AutenticationException } from "../../exceptions/autenticationException";
import { ITokenValidacaoDTO } from "../../model/tokenValidacaoDTO";
import { ValidacaoBase } from "../validacaoBase";

export class ValidaTokenCorreto extends ValidacaoBase {

    constructor(
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dadosValidToken = dadosValidacao as ITokenValidacaoDTO;
        if(dadosValidToken.resposta != undefined && dadosValidToken.resposta != null && dadosValidToken.resposta.err != null){
            throw new AutenticationException('Bloqueado');
        }
    }
    
}