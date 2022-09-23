import { AutenticationException } from "../../exceptions/autenticationException";
import { ITokenValidacaoDTO } from "../../model/tokenValidacaoDTO";
import { ITokensInvalidosRepository } from "../../repositories/tokensInvalidosRepository";
import { ValidacaoBase } from "../validacaoBase";

export class ValidaTokenJaUsado extends ValidacaoBase {

    constructor(
        private tokensInvalidosRepository: ITokensInvalidosRepository,
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dadosValidToken = dadosValidacao as ITokenValidacaoDTO;
        const tokenJaUsado = await this.tokensInvalidosRepository.recuperaTokenJaUsado(dadosValidToken.token);
        if(tokenJaUsado){
            throw new AutenticationException('Bloqueado');
        }
    }

}