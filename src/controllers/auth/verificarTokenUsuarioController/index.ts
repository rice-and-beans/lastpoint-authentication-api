import { verificarTokenUsuarioUseCase } from "../../../domain/useCases/verificarTokenUsuario";
import { VerificarTokenUsuarioController } from "../verificarTokenUsuarioController/verificarTokenUsuarioController";

const verificarTokenUsuarioController = new VerificarTokenUsuarioController(
    verificarTokenUsuarioUseCase
);

export { verificarTokenUsuarioController }