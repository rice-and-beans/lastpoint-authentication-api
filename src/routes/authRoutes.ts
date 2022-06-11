import { Router } from "express";

import { gerarTokenUsuarioController } from "../controllers/auth/gerarTokenUsuarioController";
import { verificarTokenUsuarioController } from "../controllers/auth/verificarTokenUsuarioController";

const router = Router();

router.post('/', async (request, response) => {
    return await gerarTokenUsuarioController.handle(request, response);
});

router.get('/', async (request, response) => {
    return await verificarTokenUsuarioController.handle(request, response);
});

export { router as auth };