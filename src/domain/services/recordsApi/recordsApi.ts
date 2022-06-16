import { IUsuarioDTO } from "../../../domain/model/usuarioDTO";
import { ServicoIndisponivelException } from "../../exceptions/servicoIndisponivelException";
const axios = require('axios');

export class RecordsApi {
    async buscarUsuarioPorEmail(email: string): Promise<IUsuarioDTO> {
        return await axios.post('http://localhost:3002/usuario/buscarUsuarioPorEmail', {
            email: email
        }).catch(() => {
            throw new ServicoIndisponivelException("Serviço indisponível: RecordsApi");
        })
    }
}