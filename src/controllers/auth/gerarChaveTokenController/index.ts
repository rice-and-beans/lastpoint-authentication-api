import { gerarChaveTokenUseCase } from "../../../domain/useCases/gerarChaveToken";
import { GerarChaveTokenController } from "./gerarTokenController";

const gerarChaveTokenController = new GerarChaveTokenController(
    gerarChaveTokenUseCase
);

export { gerarChaveTokenController }