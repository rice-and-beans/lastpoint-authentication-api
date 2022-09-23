import { Router } from "express";

import { gerarTokenUsuarioController } from "../controllers/auth/gerarTokenUsuarioController";
import { verificarTokenUsuarioController } from "../controllers/auth/verificarTokenUsuarioController";
import { criptografarController } from "../controllers/auth/criptografarController";
import { gerarChaveTokenController } from "../controllers/auth/gerarChaveTokenController";
import { salvarTokenInvalidoController } from "../controllers/auth/salvarTokenInvalidoController";

const router = Router();

router.get('/', async (request, response) => {
    return await verificarTokenUsuarioController.handle(request, response);
});

router.post('/', async (request, response) => {
    return await gerarTokenUsuarioController.handle(request, response);
});

router.post('/cript', async (request, response) => {
    return await criptografarController.handle(request, response);
});

router.get('/key', async (request, response) => {
    return await gerarChaveTokenController.handle(request, response);
});

router.post('/invalid', async (request, response) => {
    return await salvarTokenInvalidoController.handle(request, response);
});

export { router as auth };