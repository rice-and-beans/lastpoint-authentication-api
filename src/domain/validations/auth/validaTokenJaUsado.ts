import { AutenticationException } from "../../exceptions/AutenticationException";
import { ITokenValidacaoDTO } from "../../model/tokenValidacaoDTO";
import { ITokensInvalidosRepository } from "../../repositories/tokensInvalidosRepository";
import { ValidacaoBase } from "../ValidacaoBase";

export class ValidaTokenJaUsado extends ValidacaoBase {

    constructor(
        private tokensInvalidosRepository: ITokensInvalidosRepository,
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dadosValidToken = dadosValidacao as ITokenValidacaoDTO;
        const tokenJaUsado = this.tokensInvalidosRepository.buscarTokensInvalidos(dadosValidToken.token);
        if(tokenJaUsado){
            throw new AutenticationException('');
        }
    }

}