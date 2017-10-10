const RESOURCE_NOT_FOUND = 'Recurso no encontrado';

export class BosonError {
    code: string;
    message: string;
    criticity: number;
    errors: any[];

    static get DEFAULT_ERROR() {
        return {
            code: 'RESOURCE_NOT_FOUND',
            message: RESOURCE_NOT_FOUND,
            criticity: 0,
            errors: []
        };
    }

    constructor(code?, message?, criticity?) {
        this.code = BosonError.DEFAULT_ERROR.code;
        this.message = BosonError.DEFAULT_ERROR.message;
        this.criticity = BosonError.DEFAULT_ERROR.criticity;
        this.errors = [];
        this.setError(code, message, criticity);
        return this;
    }

    setError(code, message, criticity) {
        if (this.hasProperties(code, message, criticity)) {
            this.code = code;
            this.message = message;
            this.criticity = criticity;
        }
    }

    addException(newError) {
        if (this.hasProperties(newError.code, newError.message, newError.criticity)) {
            // delete newError.errors;
            this.errors.push(newError);
        }
        return this;
    }

    hasProperties(code, message, criticity) {
        return (code !== undefined && message !== undefined && criticity !== undefined);
    }
}
