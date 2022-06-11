import { TokensInvalidosRepositoryImpl } from "../../../data/repositories/tokensInvalidosRepositoryImpl";
import { VerificarTokenUsuarioUseCase } from "./verificarTokenUsuarioUseCase";

const tokensInvalidosRepositoryImpl = new TokensInvalidosRepositoryImpl();

const verificarTokenUsuario = new VerificarTokenUsuarioUseCase(
    tokensInvalidosRepositoryImpl
);

export { verificarTokenUsuario }