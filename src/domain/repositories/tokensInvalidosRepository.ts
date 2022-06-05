import { TokensInvalidos } from "../../data/entities/tokensInvalidos";

export interface ITokensInvalidosRepository {
    buscarTokensInvalidos(email: string): Promise<TokensInvalidos[]>;
    salvarTokenInvalido(token: string, usuarioCodigo: string);
}