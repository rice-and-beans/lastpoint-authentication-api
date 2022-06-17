import { ValidaSenhaCorreta } from "../../validations/auth/validaSenhaCorreta";
import { ValidaUsuarioExiste } from "../../validations/auth/validaUsuarioExiste";
import { ValidaParamObrigatorios } from "../../validations/common/validaParamObrigatorios";
import { GerarTokenUsuarioUseCase } from "./gerarTokenUsuarioUseCase";

const validaSenhaCorreta = new ValidaSenhaCorreta();
const validaUsuarioExiste = new ValidaUsuarioExiste();
const validaParamObrigatorios = new ValidaParamObrigatorios();

const gerarTokenUsuarioUseCase = new GerarTokenUsuarioUseCase(
    validaParamObrigatorios,
    validaUsuarioExiste,
    validaSenhaCorreta
);

export { gerarTokenUsuarioUseCase }