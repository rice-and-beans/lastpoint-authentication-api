import { IUsuarioDTO } from "../../domain/model/usuarioDTO";

export interface IUsuarioSecurityDTO {
    usuario: IUsuarioDTO;
    senhaComparacao: string;
}