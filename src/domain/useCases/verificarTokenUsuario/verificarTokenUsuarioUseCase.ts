import { tokenUtil } from "../../utils/tokenUtil";
import { ValidacaoBase } from "../../validations/ValidacaoBase";

export class VerificarTokenUsuarioUseCase {

    constructor(
        private validacoesToken : ValidacaoBase
    ){}

    async execute(token: string){
        const resposta = tokenUtil.verificarToken(token != null ? token : '');
        const dadosValidToken = { token: token, resposta: resposta }
        this.validacoesToken.valida(dadosValidToken);
    }

}