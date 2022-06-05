import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { VerificarTokenUsuarioUseCase } from "../../../domain/useCases/auth/verificarTokenUsuario/verificarTokenUsuarioUseCase";

export class VerificarTokenUsuarioController extends BaseController {

    constructor(
        private verificarTokenUsuarioUseCase: VerificarTokenUsuarioUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, nome, email, senha, tipo } = request.body;
        await this.verificarTokenUsuarioUseCase.execute();
        return response.status(201).send();
    }

}