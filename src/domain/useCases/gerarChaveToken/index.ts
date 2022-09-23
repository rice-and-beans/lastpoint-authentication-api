import { ValidaParamObrigatorios } from "../../validations/common/validaParamObrigatorios";
import { GerarChaveTokenUseCase } from "./gerarChaveTokenUseCase";

const validaParamObrigatorios = new ValidaParamObrigatorios();

const gerarChaveTokenUseCase = new GerarChaveTokenUseCase(
    validaParamObrigatorios
);

export { gerarChaveTokenUseCase }