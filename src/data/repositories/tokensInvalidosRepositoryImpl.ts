import { prismaClient } from "../database/prismaClient";
import { ITokensInvalidosRepository } from "../../domain/repositories/tokensInvalidosRepository";
import { TokensInvalidos } from "../entities/tokensInvalidos";

export class TokensInvalidosRepositoryImpl implements ITokensInvalidosRepository {
    async buscarTokensInvalidos(usuarioCodigo: string): Promise<TokensInvalidos[]>{
        const listaTokensInvalidos = await prismaClient.tokensInvalidos.findMany({
            where: { 
                usuarioCodigo: usuarioCodigo
            }
        });
        return listaTokensInvalidos;
    }
    async salvarTokenInvalido(token: string, usuarioCodigo: string) {
        await prismaClient.tokensInvalidos.create({
            data: {
                token: token,
                usuarioCodigo: usuarioCodigo
            }
        });
    }
}