import { verificarTokenUsuarioUseCase } from "../domain/useCases/verificarTokenUsuario";
import { BaseController } from "./baseController";
import { AutenticationException } from "../domain/exceptions/autenticationException";

export abstract class BaseControllerAuth extends BaseController{

    protected async auth(request){
        const token = request.headers['x-access-token'];
        try {
            await verificarTokenUsuarioUseCase.execute(token);
        } catch (error) {
            throw new AutenticationException("Não Autenticado");
        }
    }

}