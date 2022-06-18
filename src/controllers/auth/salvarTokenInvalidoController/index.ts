import { salvarTokenInvalidoUseCase } from "../../../domain/useCases/salvarTokenInvalido";
import { SalvarTokenInvalidoController } from "../salvarTokenInvalidoController/salvarTokenInvalidoController";

const salvarTokenInvalidoController = new SalvarTokenInvalidoController(
    salvarTokenInvalidoUseCase
);

export { salvarTokenInvalidoController }