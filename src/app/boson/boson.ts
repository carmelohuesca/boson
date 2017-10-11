import { BosonPagination } from './boson-pagination';
const PACKAGE = require('../../../package.json');

export class Boson {

    name: string;
    apiVersion: string;
    params: any;
    data: any;
    error: any;

    id?: string;
    context?: string;
    method?: string;

    constructor() {
        this.apiVersion = PACKAGE.version;
        this.name = PACKAGE.name;
        this.data = {};
        this.params = {};
    }

    setPagination(bosonPagination?: BosonPagination): Boson {
        const pagination = bosonPagination || new BosonPagination();
        this.data.totalItems = this.data.items.length;
        this.data.itemsPerPage = pagination ? pagination.itemsPerPage : 1;
        this.data.totalPages = this.data.totalItems / this.data.itemsPerPage;
        this.data.pageIndex = pagination ? pagination.pageIndex : 1;
        this.data.startIndex = pagination ? pagination.startIndex : 0;
        this.data.self = this.getSelf();
        this.data.next = this.getNext();
        this.data.previous = this.getPrevious();
        return this;
    }

    getSelf(): any {
        return this.data.items.length > 0 ? this.data.items[this.data.startIndex] : {};
    }

    getNext(): any {
        let next: any = {};
        if (this.data.items.length > 1) {
            if (this.data.startIndex + 1 > this.data.items.length - 1) {
                next = this.data.items[0];
            } else {
                next = this.data.items[this.data.startIndex + 1];
            }
        }
        return next;
    }

    getPrevious(): any {
        let previous: any = {};
        if (this.data.items.length > 0) {
            if (this.data.startIndex < 1) {
                previous = this.data.items[this.data.items.length - 1];
            } else {
                previous = this.data.items[this.data.startIndex - 1];
            }
        }
        return previous;
    }

    setItems(items?: any[]): Boson {
        this.data.items = items || [];
        this.setPagination();
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
