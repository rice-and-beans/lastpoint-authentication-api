import { SecurityConsts } from "../../../constants/securityConsts";
const jwt = require("jsonwebtoken");

export class TokenUtil {

    gerarToken(chave){
        return jwt.sign({chave: chave}, 
                         SecurityConsts.SECRET, 
                        {expiresIn: SecurityConsts.EXPIRACAO_TOKEN}
        );
    }

    verificarToken(token){
        return jwt.verify(token, SecurityConsts.SECRET, (err) => {
            if(err){
                return {err: err};
            }else{
                return;
            }
        });
    }

}