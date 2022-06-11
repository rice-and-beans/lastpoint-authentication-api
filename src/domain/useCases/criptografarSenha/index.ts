import { ValidaSenhaCorreta } from "../../validations/auth/validaSenhaCorreta";
import { ValidaUsuarioExiste } from "../../validations/auth/validaUsuarioExiste";
import { ValidaParamObrigatorios } from "../../validations/common/validaParamObrigatorios";
import { CriptografarSenhaUseCase } from "./criptografarSenhaUseCase";

const validaParamObrigatorios = new ValidaParamObrigatorios();

const criptografarSenhaUseCase = new CriptografarSenhaUseCase(
    validaParamObrigatorios
);

export { criptografarSenhaUseCase }