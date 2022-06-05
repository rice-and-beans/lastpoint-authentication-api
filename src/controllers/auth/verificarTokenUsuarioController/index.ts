import { verificarTokenUsuario } from "../../../domain/useCases/verificarTokenUsuario";
import { VerificarTokenUsuarioController } from "../verificarTokenUsuarioController/verificarTokenUsuarioController";

const verificarTokenUsuarioController = new VerificarTokenUsuarioController(
    verificarTokenUsuario
);

export { verificarTokenUsuarioController }