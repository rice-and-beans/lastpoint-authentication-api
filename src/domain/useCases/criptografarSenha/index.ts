import { ValidaParamObrigatorios } from "../../validations/common/validaParamObrigatorios";
import { CriptografarUseCase } from "./criptografarUseCase";

const validaParamObrigatorios = new ValidaParamObrigatorios();

const criptografarUseCase = new CriptografarUseCase(
    validaParamObrigatorios
);

export { criptografarUseCase }