import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { CriptografarUseCase } from "../../../domain/useCases/criptografarSenha/criptografarUseCase";

export class CriptografarController extends BaseController {

    constructor(
        private criptografarUseCase: CriptografarUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { conteudo } = request.body;
        const token = await this.criptografarUseCase.execute(
            conteudo
        );
        return response.status(200).send(token);
    }

}