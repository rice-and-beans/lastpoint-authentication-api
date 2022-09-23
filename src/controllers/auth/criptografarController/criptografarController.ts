import { Request, Response } from "express";
import { CriptografarUseCase } from "../../../domain/useCases/criptografarSenha/criptografarUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class CriptografarController extends BaseControllerAuth {

    constructor(
        private criptografarUseCase: CriptografarUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const conteudo = request.query.conteudo as string;
        const token = await this.criptografarUseCase.execute(
            conteudo
        );
        return response.status(200).send(token);
    }

}