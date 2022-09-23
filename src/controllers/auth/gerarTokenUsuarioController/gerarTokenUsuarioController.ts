import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { GerarTokenUsuarioUseCase } from "../../../domain/useCases/gerarTokenUsuario/gerarTokenUsuarioUseCase";

export class GerarTokenUsuarioController extends BaseController {

    constructor(
        private gerarTokenUsuarioUseCase: GerarTokenUsuarioUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { login, senha } = request.body;
        const token = await this.gerarTokenUsuarioUseCase.execute(
            login,
            senha
        );
        return response.status(200).send(token);
    }

}