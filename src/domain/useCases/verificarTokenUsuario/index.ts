import { TokensInvalidosRepositoryImpl } from "../../../data/repositories/tokensInvalidosRepositoryImpl";
import { ValidaTokenCorreto } from "../../validations/auth/validaTokenCorreto";
import { ValidaTokenJaUsado } from "../../validations/auth/validaTokenJaUsado";
import { VerificarTokenUsuarioUseCase } from "./verificarTokenUsuarioUseCase";

const tokensInvalidosRepositoryImpl = new TokensInvalidosRepositoryImpl();

const validaTokenJaUsado = new ValidaTokenJaUsado(
    tokensInvalidosRepositoryImpl
);
    
const validaTokenCorreto = new ValidaTokenCorreto(
    validaTokenJaUsado
);

const verificarTokenUsuarioUseCase = new VerificarTokenUsuarioUseCase(
    validaTokenCorreto
);

export { verificarTokenUsuarioUseCase }