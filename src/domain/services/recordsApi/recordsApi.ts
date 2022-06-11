import { IUsuarioDTO } from "../../../domain/model/usuarioDTO";

const axios = require('axios');

export class RecordsApi {
    async buscarUsuarioPorEmail(email: string): Promise<IUsuarioDTO> {
        return axios.post('http://localhost:3001/usuario/buscarUsuarioPorEmail', {
            email: email
        });
    }
}