import { ValidaSenhaCorreta } from "../../validations/auth/validaSenhaCorreta";
import { ValidaUsuarioExiste } from "../../validations/auth/validaUsuarioExiste";
import { GerarTokenUsuarioUseCase } from "./gerarTokenUsuarioUseCase";

const validaSenhaCorreta = new ValidaSenhaCorreta();

const validaUsuarioExiste = new ValidaUsuarioExiste(
    validaSenhaCorreta
);

const gerarTokenUsuarioUseCase = new GerarTokenUsuarioUseCase(
    validaUsuarioExiste
);

export { gerarTokenUsuarioUseCase }