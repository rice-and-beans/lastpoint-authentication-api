import { validacaoSenhaUtil } from "../../utils/validacaoSenhaUtil";
import { ValidacaoBase } from "../../validations/validacaoBase";

export class CriptografarUseCase {

    constructor(
        private validacaoParamObrigatorio: ValidacaoBase,
    ){}

    async execute(conteudo: string): Promise<string> {
        const dadosValidacao = new Map<string, string>([[conteudo, "conteudo"]]);
        await this.validacaoParamObrigatorio.valida(dadosValidacao);
        return await validacaoSenhaUtil.criptografar(conteudo.toString());
    }

}