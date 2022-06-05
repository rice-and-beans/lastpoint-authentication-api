export class TokensInvalidos {
    public readonly id: string;
    public token: string;
    public usuarioCodigo: string

    constructor(props: Omit<TokensInvalidos, 'id'>, id?: string){
        Object.assign(this, props);
    }
}