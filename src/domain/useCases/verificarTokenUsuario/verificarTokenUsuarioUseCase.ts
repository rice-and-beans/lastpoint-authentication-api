import { ITokensInvalidosRepository } from "../../repositories/tokensInvalidosRepository";
import { tokenUtil } from "../../utils/tokenUtil";

export class VerificarTokenUsuarioUseCase {

    constructor(
        private tokensInvalidosRepository: ITokensInvalidosRepository,
    ){}

    async execute(token: string){
        const resposta = tokenUtil.verificarToken(token);

        
    }

}