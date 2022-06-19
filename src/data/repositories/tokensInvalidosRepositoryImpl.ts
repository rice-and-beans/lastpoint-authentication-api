import { prismaClient } from "../database/prismaClient";
import { ITokensInvalidosRepository } from "../../domain/repositories/tokensInvalidosRepository";
import { TokensInvalidos } from "../entities/tokensInvalidos";

export class TokensInvalidosRepositoryImpl implements ITokensInvalidosRepository {
    
    async buscarTokensInvalidos(): Promise<TokensInvalidos[]>{
        const listaTokensInvalidos = await prismaClient.tokensInvalidos.findMany();
        return listaTokensInvalidos;
    }

    async salvarTokenInvalido(token: string) {
        await prismaClient.tokensInvalidos.create({
            data: {
                token: token
            }
        });
    }

    async recuperaTokenJaUsado(token: string): Promise<string|null> {
        const tokenInvalido = await prismaClient.tokensInvalidos.findMany({
            where: { 
                token: token
            }
        });
        return tokenInvalido != null && tokenInvalido.length > 0 ? tokenInvalido[0].token : null;
    }
    
}