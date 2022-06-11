import { validacaoSenhaUtil } from "../../utils/validacaoSenhaUtil";
import { ValidacaoBase } from "../../validations/validacaoBase";

export class CriptografarSenhaUseCase {

    constructor(
        private validacaoParamObrigatorio: ValidacaoBase,
    ){}

    async execute(senha: string): Promise<string> {
        const dadosValidacao = new Map<string, string>([[senha, "senha"]]);
        await this.validacaoParamObrigatorio.valida(dadosValidacao);
        return await validacaoSenhaUtil.criptogravarSenha(senha.toString());
    }

}