import { recordsApi } from "../../services/recordsApi";
import { tokenUtil } from "../../utils/tokenUtil";
import { ValidacaoBase } from "../../validations/validacaoBase";

export class GerarTokenUsuarioUseCase {

    constructor(
        private validaoesUsuarioValido: ValidacaoBase,
    ){}

    async execute(login: string, senha: string): Promise<string|null> {
        const usuario = await recordsApi.buscarUsuarioPorEmail(login);
        const dadosValidSenha = {usuario: usuario, senhaComparacao: senha}
        
        await this.validaoesUsuarioValido.valida(dadosValidSenha);
        return tokenUtil.gerarToken(usuario.id);
    }

}