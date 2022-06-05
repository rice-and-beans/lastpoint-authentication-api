import { recordsApi } from "../../services/recordsApi";
import { validacaoSenhaUtil } from "../../utils/validacaoSenhaUtil";
import { tokenUtil } from "../../utils/tokenUtil";
import { AutenticationException } from "../../exceptions/AutenticationException";

export class GerarTokenUsuarioUseCase {

    async execute(login: string, senha: string): Promise<string|null> {
        const usuario = await recordsApi.buscarUsuarioPorEmail(login);
        if(usuario != null){
            if(await validacaoSenhaUtil.compararSenha(usuario.senha, senha)){
                return tokenUtil.gerarToken(usuario.id);
            }else{
                throw new AutenticationException('');
            }
        }else{
            throw new AutenticationException('');
        }
    }

}