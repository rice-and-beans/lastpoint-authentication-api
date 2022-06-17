import { IUsuarioDTO } from "../../../domain/model/usuarioDTO";
import { ServicoIndisponivelException } from "../../exceptions/servicoIndisponivelException";
const axios = require('axios');

export class RecordsApi {
    async buscarUsuarioPorEmail(email: string): Promise<IUsuarioDTO> {
        return await axios.get('http://localhost:3001/usuario/buscarUsuarioPorEmail', {
            email: email
        }).catch((err) => {
            console.log(err)
            throw new ServicoIndisponivelException("Serviço indisponível: RecordsApi");
        })
    }
}