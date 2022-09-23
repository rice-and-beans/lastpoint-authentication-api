import { SecurityConsts } from "../../../constants/securityConsts";
import { PasswordException } from "../../exceptions/passwordException";
const bcrypt = require('bcrypt');

export class ValidacaoSenhaUtil {
    
    validarForcaSenha(senha){
        validaTamanhoSenha(senha);
        verificarForcaSenhaSemHash(senha);
    }

    async criptografar(senha){
        return await bcrypt.hash(senha, 8);
    }

    async compararSenha(senha, hash){
        return await bcrypt.compare(senha, hash);
    }

}

function validaTamanhoSenha(senha){
    if(senha == ""){
        throw new PasswordException("Senha não informada!");
    }else if(senha.length < SecurityConsts.TAMANHO_MIN_SENHA || senha.length > SecurityConsts.TAMANHO_MAX_SENHA) {
        throw new PasswordException("Senha com comprimento inválido! (MAX: "+
        SecurityConsts.TAMANHO_MAX_SENHA+", MIN: "+SecurityConsts.TAMANHO_MIN_SENHA+")");
    }
}

function verificarForcaSenhaSemHash(senha) {
    var numericos = 0;    
    var maiusculas = 0;   
    var minusculas = 0;
    var simbolos = 0;
    
    Array.from(senha).forEach(umCarecter => {
        if (umCarecter >= '0' && umCarecter <= '9') {
            numericos++;
        }else if (umCarecter >= 'A' && umCarecter <= 'Z') {
            maiusculas++;
        }else if (umCarecter >= 'a' && umCarecter <= 'z') {
            minusculas++;
        }else {
            simbolos++;
        }
    });
    verificarQtdMinimaPadraoSenha(numericos, maiusculas, minusculas, simbolos);
}

function verificarQtdMinimaPadraoSenha(numericos, maiusculas, minusculas, simbolos) {
    if(numericos < SecurityConsts.CARACTERES_MIN_NUMERICOS) {
        throw new PasswordException("Quantidade mínima de numéricos na senha: "+SecurityConsts.CARACTERES_MIN_NUMERICOS);
    }
    if(maiusculas < SecurityConsts.CARACTERES_MIN_MAIUSCULA) {
        throw new PasswordException("Quantidade mínima de maiúsculas na senha: "+SecurityConsts.CARACTERES_MIN_MAIUSCULA);
    }
    if(minusculas < SecurityConsts.CARACTERES_MIN_MINUSCULA) {
        throw new PasswordException("Quantidade mínima de minúsculas na senha: "+SecurityConsts.CARACTERES_MIN_MINUSCULA);
    }
    if(simbolos < SecurityConsts.CARACTERES_MIN_SIMBOLOS) {
        throw new PasswordException("Quantidade mínima de símbolos na senha: "+SecurityConsts.CARACTERES_MIN_SIMBOLOS);
    }
}