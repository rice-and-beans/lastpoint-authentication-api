import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { GerarChaveTokenUseCase } from "../../../domain/useCases/gerarChaveToken/gerarChaveTokenUseCase";

export class GerarChaveTokenController extends BaseController {

    constructor(
        private gerarChaveTokenUseCase: GerarChaveTokenUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { chave } = request.body;
        const token = await this.gerarChaveTokenUseCase.execute(
            chave
        );
        return response.status(200).send(token);
    }

}