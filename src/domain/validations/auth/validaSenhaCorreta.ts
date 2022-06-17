import { AutenticationException } from "../../exceptions/autenticationException";
import { IUsuarioSecurityDTO } from "../../model/usuarioSecurityDTO";
import { validacaoSenhaUtil } from "../../utils/validacaoSenhaUtil";
import { ValidacaoBase } from "../validacaoBase";

export class ValidaSenhaCorreta extends ValidacaoBase {

    constructor(
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dadosValidSenha = dadosValidacao as IUsuarioSecurityDTO;
        try{
            await validacaoSenhaUtil.compararSenha(dadosValidSenha.usuario.senha, dadosValidSenha.senhaComparacao)
        }catch(err){
            throw new AutenticationException('Bloqueado');
        }
    }
    
}