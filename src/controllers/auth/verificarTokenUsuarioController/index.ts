import { verificarTokenUsuario } from "../../../domain/useCases/auth/verificarTokenUsuario";
import { VerificarTokenUsuarioController } from "../verificarTokenUsuarioController/verificarTokenUsuarioController";

const verificarTokenUsuarioController = new VerificarTokenUsuarioController(
    verificarTokenUsuario
);

export { verificarTokenUsuarioController }