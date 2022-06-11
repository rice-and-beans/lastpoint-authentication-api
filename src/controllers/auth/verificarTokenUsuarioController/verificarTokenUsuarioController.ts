import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { VerificarTokenUsuarioUseCase } from "../../../domain/useCases/verificarTokenUsuario/verificarTokenUsuarioUseCase";

export class VerificarTokenUsuarioController extends BaseController {

    constructor(
        private verificarTokenUsuarioUseCase: VerificarTokenUsuarioUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const token = request.headers['x-access-token'];
        await this.verificarTokenUsuarioUseCase.execute(token ? token[0] : null);
        return response.status(200).send();
    }

}