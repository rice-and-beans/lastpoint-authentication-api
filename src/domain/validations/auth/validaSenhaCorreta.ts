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
            const acessoPermitido = await validacaoSenhaUtil.compararSenha(dadosValidSenha.senhaComparacao, dadosValidSenha.usuario.senha)
            if(!acessoPermitido){
                throw new AutenticationException('Bloqueado');    
            }
        }catch(err){
            throw new AutenticationException('Bloqueado');
        }
    }
    
}