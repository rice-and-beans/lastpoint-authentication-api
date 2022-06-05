import { RecordsApi } from "../../../services/recordsApi";

export class GerarTokenUsuarioUseCase {

    constructor(
    ){}

    async execute(login: string, senha: string){
        const usuario = await RecordsApi.buscarUsuarioPorEmail(login)
        if(usuario != null){
            const usuarioDto = usuarioDTO.usuarioToDTOComSenhaAndId(usuario);
            if(await validacaoSenhaUtil.compararSenha(paramsValidacao.senha, usuarioDto.senha)){
                return {token: tokenUtil.gerarToken(usuarioDto.id)};
            }else{
                return {authentication: 'Unauthorized'};
            }
        }else{
            return {authentication: 'Unauthorized'};
        }
    }

}