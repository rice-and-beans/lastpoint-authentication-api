import { AutenticationException } from "../../exceptions/AutenticationException";
import { IUsuarioSecurityDTO } from "../../model/usuarioSecurityDTO";
import { validacaoSenhaUtil } from "../../utils/validacaoSenhaUtil";
import { ValidacaoBase } from "../ValidacaoBase";

export class ValidaSenhaCorreta extends ValidacaoBase {

    constructor(
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dadosValidSenha = dadosValidacao as IUsuarioSecurityDTO;
        if(await !validacaoSenhaUtil.compararSenha(dadosValidSenha.usuario.senha, dadosValidSenha.senhaComparacao)){
            throw new AutenticationException('');
        }
    }
    
}