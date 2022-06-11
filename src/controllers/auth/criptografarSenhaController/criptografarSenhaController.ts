import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { CriptografarSenhaUseCase } from "../../../domain/useCases/criptografarSenha/criptografarSenhaUseCase";

export class CriptografarSenhaController extends BaseController {

    constructor(
        private criptografarSenhaUseCase: CriptografarSenhaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { senha } = request.body;
        const token = await this.criptografarSenhaUseCase.execute(
            senha
        );
        return response.status(200).send(token);
    }

}