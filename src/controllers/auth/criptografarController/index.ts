import { criptografarUseCase } from "../../../domain/useCases/criptografarSenha";
import { CriptografarController } from "./criptografarController";

const criptografarController = new CriptografarController(
    criptografarUseCase
);

export { criptografarController }