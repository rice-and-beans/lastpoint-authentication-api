import { Usuario } from "../../data/entities/usuario";

export interface IUsuarioSecurityDTO {
    usuario: Usuario;
    senhaComparacao: string;
}