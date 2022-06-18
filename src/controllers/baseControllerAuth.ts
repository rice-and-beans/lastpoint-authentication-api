import { AutenticacaoInvalidaException } from "../domain/exceptions/autenticacaoInvalidaException";
import { verificarTokenUsuarioUseCase } from "../domain/useCases/verificarTokenUsuario";
import { salvarTokenInvalidoUseCase } from "../domain/useCases/salvarTokenInvalido";
import { BaseController } from "./baseController";

export abstract class BaseControllerAuth extends BaseController{

    protected async auth(request, response){
        const token = request.headers['x-access-token'];
        var retorno: any;
        
        try {
            retorno = await verificarTokenUsuarioUseCase.execute(token);
        } catch (error) {
            throw new AutenticacaoInvalidaException("Não Autenticado");
        }
        await salvarTokenInvalidoUseCase.execute(token);
    }
}