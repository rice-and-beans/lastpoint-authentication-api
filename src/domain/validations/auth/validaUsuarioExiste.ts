import { IUsuarioDTO } from "../../../domain/model/usuarioDTO";
import { AutenticationException } from "../../exceptions/autenticationException";
import { ValidacaoBase } from "../validacaoBase";

export class ValidaUsuarioExiste extends ValidacaoBase {

    constructor(
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const usuario = dadosValidacao as IUsuarioDTO;
        if(usuario == null){
            throw new AutenticationException('Bloqueado');
        }
    }
    
}