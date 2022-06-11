import { Usuario } from "../../../data/entities/usuario";
import { AutenticationException } from "../../exceptions/AutenticationException";
import { ValidacaoBase } from "../ValidacaoBase";

export class ValidaUsuarioExiste extends ValidacaoBase {

    constructor(
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const usuario = dadosValidacao as Usuario;
        if(usuario == null){
            throw new AutenticationException('');
        }
    }
    
}