const PACKAGE = require('../../../package.json');

export class Boson {

    apiVersion: string;
    scope: string;
    name: string;
    data: any;
    error: any;

    constructor() {
        this.apiVersion = PACKAGE.version;
        this.name = PACKAGE.name;
        this.data = {};
    }

    setItems(items: any[]): Boson {
        this.data.items = items || [];
        return this;
    }

    setObject(obj: any): Boson {
        this.data.self = obj || {};
        return this;
    }

    setError(error: any): Boson {
        this.error = error;
        return this;
    }

}
