import { Request, Response } from "express";
import { GerarChaveTokenUseCase } from "../../../domain/useCases/gerarChaveToken/gerarChaveTokenUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class GerarChaveTokenController extends BaseControllerAuth {

    constructor(
        private gerarChaveTokenUseCase: GerarChaveTokenUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const chave = request.query.chave as string;
        const token = await this.gerarChaveTokenUseCase.execute(
            chave
        );
        return response.status(200).send(token);
    }

}