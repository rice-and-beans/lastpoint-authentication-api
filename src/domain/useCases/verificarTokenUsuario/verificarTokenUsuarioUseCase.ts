import { tokenUtil } from "../../utils/tokenUtil";
import { ValidacaoBase } from "../../validations/validacaoBase";

export class VerificarTokenUsuarioUseCase {

    constructor(
        private validacoesToken : ValidacaoBase
    ){}

    async execute(token: string){
        const resposta = tokenUtil.verificarToken(token ? token : '');
        const dadosValidToken = { token: token, resposta: resposta }
        await this.validacoesToken.valida(dadosValidToken);
    }

}