import { TokensInvalidosRepositoryImpl } from "../../../data/repositories/tokensInvalidosRepositoryImpl";
import { ValidaParamObrigatorios } from "../../validations/common/validaParamObrigatorios";
import { SalvarTokenInvalidoUseCase } from "./salvarTokenInvalido";

const tokensInvalidosRepository = new TokensInvalidosRepositoryImpl();
const validaParamObrigatorios = new ValidaParamObrigatorios();

const salvarTokenInvalidoUseCase = new SalvarTokenInvalidoUseCase(
    tokensInvalidosRepository,
    validaParamObrigatorios
);

export { salvarTokenInvalidoUseCase }