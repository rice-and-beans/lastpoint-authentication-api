import { Console } from "console";
import { ITokensInvalidosRepository } from "../../repositories/tokensInvalidosRepository";
import { ValidacaoBase } from "../../validations/validacaoBase";

export class SalvarTokenInvalidoUseCase {

    constructor(
        private tokensInvalidosRepository: ITokensInvalidosRepository,
        private validaParamObrigatorios: ValidacaoBase
    ){}

    async execute(token: string) {
        const dadosValidacao = new Map<string, string>([
            [token, "token"],
        ]);
        await this.validaParamObrigatorios.valida(dadosValidacao);
        this.tokensInvalidosRepository.salvarTokenInvalido(token);
    }

}