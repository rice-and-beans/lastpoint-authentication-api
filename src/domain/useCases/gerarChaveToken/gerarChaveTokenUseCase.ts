import { tokenUtil } from "../../utils/tokenUtil";
import { ValidacaoBase } from "../../validations/validacaoBase";

export class GerarChaveTokenUseCase {

    constructor(
        private validacaoParamObrigatorio: ValidacaoBase,
    ){}

    async execute(chave: string): Promise<string> {
        const dadosValidacao = new Map<string, string>([[chave, "chave"]]);
        await this.validacaoParamObrigatorio.valida(dadosValidacao);
        return await tokenUtil.gerarToken(chave);
    }

}