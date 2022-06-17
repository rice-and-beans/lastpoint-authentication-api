import { IUsuarioDTO } from "../../../domain/model/usuarioDTO";
import { ServicoIndisponivelException } from "../../exceptions/servicoIndisponivelException";
const axios = require('axios');

export class RecordsApi {
    async buscarUsuarioPorEmail(email: string): Promise<IUsuarioDTO|any> {
        return await axios.get('http://localhost:3001/usuario/email', {
            params: {
                email: email
            }
        }).then(function (response) {
            if(response){
                return response.data ? response.data as IUsuarioDTO : null
            }else{
                return null;
            }
        }).catch((err) => {
            throw new ServicoIndisponivelException("Serviço indisponível: RecordsApi");
        });
    }
}