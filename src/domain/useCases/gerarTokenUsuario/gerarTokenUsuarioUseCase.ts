import { Console } from "console";
import { recordsApi } from "../../services/recordsApi";
import { tokenUtil } from "../../utils/tokenUtil";
import { ValidacaoBase } from "../../validations/validacaoBase";

export class GerarTokenUsuarioUseCase {

    constructor(
        private validaParamObrigatorios: ValidacaoBase,
        private validaUsuarioExiste: ValidacaoBase,
        private validaSenhaCorreta: ValidacaoBase,
    ){}

    async execute(login: string, senha: string): Promise<string|null> {
        const usuario = await recordsApi.buscarUsuarioPorEmail(login);
        const dadosValidacao = new Map<string, string>([
            [usuario, "usuario"],
            [senha, "senha"]
        ]);
        
        await this.validaParamObrigatorios.valida(dadosValidacao);
        await this.validaUsuarioExiste.valida(usuario);
        await this.validaSenhaCorreta.valida({
            usuario: usuario, 
            senhaComparacao: senha
        });
        return tokenUtil.gerarToken(usuario.id);
    }

}