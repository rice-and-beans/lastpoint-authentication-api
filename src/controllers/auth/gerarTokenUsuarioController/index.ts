import { gerarTokenUsuarioUseCase } from "../../../domain/useCases/auth/gerarTokenUsuario";
import { GerarTokenUsuarioController } from "../gerarTokenUsuarioController/gerarTokenUsuarioController";

const gerarTokenUsuarioController = new GerarTokenUsuarioController(
    gerarTokenUsuarioUseCase
);

export { gerarTokenUsuarioController }