import { gerarTokenUsuarioUseCase } from "../../../domain/useCases/gerarTokenUsuario";
import { GerarTokenUsuarioController } from "../gerarTokenUsuarioController/gerarTokenUsuarioController";

const gerarTokenUsuarioController = new GerarTokenUsuarioController(
    gerarTokenUsuarioUseCase
);

export { gerarTokenUsuarioController }