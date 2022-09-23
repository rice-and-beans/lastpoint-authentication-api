import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { VerificarTokenUsuarioUseCase } from "../../../domain/useCases/verificarTokenUsuario/verificarTokenUsuarioUseCase";

export class VerificarTokenUsuarioController extends BaseController {

    constructor(
        private verificarTokenUsuarioUseCase: VerificarTokenUsuarioUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const token = request.headers['x-access-token'] as string;
        await this.verificarTokenUsuarioUseCase.execute(token);
        return response.status(200).send();
    }

}