import { Usuario } from "../../../data/entities/usuario";

const axios = require('axios');

export class RecordsApi {
    async buscarUsuarioPorEmail(email: string): Promise<Usuario> {
        return axios.post('http://localhost:3001/usuario/buscarUsuarioPorEmail', {
            email: email
        });
    }
}