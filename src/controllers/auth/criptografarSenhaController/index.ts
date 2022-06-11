import { criptografarSenhaUseCase } from "../../../domain/useCases/criptografarSenha";
import { CriptografarSenhaController } from "../criptografarSenhaController/criptografarSenhaController";

const criptografarSenhaController = new CriptografarSenhaController(
    criptografarSenhaUseCase
);

export { criptografarSenhaController }