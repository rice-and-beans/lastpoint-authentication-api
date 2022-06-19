import { verificarTokenUsuarioUseCase } from "../domain/useCases/verificarTokenUsuario";
import { salvarTokenInvalidoUseCase } from "../domain/useCases/salvarTokenInvalido";
import { BaseController } from "./baseController";
import { AutenticationException } from "../domain/exceptions/autenticationException";

export abstract class BaseControllerAuth extends BaseController{

    protected async auth(request, response){
        const token = request.headers['x-access-token'];
        
        try {
            await verificarTokenUsuarioUseCase.execute(token);
        } catch (error) {
            throw new AutenticationException("Não Autenticado");
        }
        await salvarTokenInvalidoUseCase.execute(token);
    }
}