import { Router } from "express";

import { gerarTokenUsuarioController } from "../controllers/auth/gerarTokenUsuarioController";
import { verificarTokenUsuarioController } from "../controllers/auth/verificarTokenUsuarioController";
import { criptografarSenhaController } from "../controllers/auth/criptografarSenhaController";

const router = Router();

router.get('/', async (request, response) => {
    return await verificarTokenUsuarioController.handle(request, response);
});

router.post('/', async (request, response) => {
    return await gerarTokenUsuarioController.handle(request, response);
});

router.post('/cript', async (request, response) => {
    return await criptografarSenhaController.handle(request, response);
});

export { router as auth };