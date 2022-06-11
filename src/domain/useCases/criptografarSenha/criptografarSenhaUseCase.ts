import { validacaoSenhaUtil } from "../../utils/validacaoSenhaUtil";
import { ValidacaoBase } from "../../validations/validacaoBase";

export class CriptografarSenhaUseCase {

    constructor(
        private validacaoParamObrigatorio: ValidacaoBase,
    ){}

    async execute(senha: string): Promise<string> {
        this.validacaoParamObrigatorio.valida([senha]);
        return validacaoSenhaUtil.criptogravarSenha(senha);
    }

}