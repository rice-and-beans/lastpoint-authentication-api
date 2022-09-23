export class AutenticationException extends Error {
    
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, AutenticationException.prototype);
    }

    getMenssage() {
        return this.message;
    }

}