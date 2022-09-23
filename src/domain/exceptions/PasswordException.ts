export class PasswordException extends Error {
    
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, PasswordException.prototype);
    }

    getMenssage() {
        return this.message;
    }

}