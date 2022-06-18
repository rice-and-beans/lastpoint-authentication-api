import { TokensInvalidos } from "../../data/entities/tokensInvalidos";

export interface ITokensInvalidosRepository {
    buscarTokensInvalidos(token: string): Promise<TokensInvalidos[]>;
    recuperaTokenJaUsado(email: string): Promise<string|null>;
    salvarTokenInvalido(token: string);
}