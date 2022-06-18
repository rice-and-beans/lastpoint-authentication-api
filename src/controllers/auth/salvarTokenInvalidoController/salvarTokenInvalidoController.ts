import { Request, Response } from "express";
import { SalvarTokenInvalidoUseCase } from "../../../domain/useCases/salvarTokenInvalido/salvarTokenInvalido";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class SalvarTokenInvalidoController extends BaseControllerAuth {

    constructor(
        private salvarTokenInvalidoUseCase: SalvarTokenInvalidoUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { token } = request.body;
        await this.salvarTokenInvalidoUseCase.execute(
            token
        );
        return response.status(201).send();
    }

}