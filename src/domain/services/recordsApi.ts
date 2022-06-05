const axios = require('axios');

export class RecordsApi {
    async buscarUsuarioPorEmail(email: string){
        axios.post('http://localhost:3001/usuario/buscarUsuarioPorEmail', {
            email: email
        });
    }
}