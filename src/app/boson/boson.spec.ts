import { Boson } from './boson';
import { BosonPagination } from './boson-pagination';

describe('Boson', () => {

    let instance: Boson = new Boson();
    let items = [];
    const item = { id: 1, name: 'item' };
    const one = { id: 1, name: 'one' };
    const two = { id: 2, name: 'two' };
    const three = { id: 3, name: 'three' };
    const ITEMS_PER_PAGE = 3;
    const PAGE_INDEX = 1;
    const START_INDEX = 0;
    const error = { code: 404, message: 'not found', errors: [] };

    beforeEach(() => {
        instance = new Boson();
        items = [];
    });

    it(['existe la instancia', instance.name, instance.apiVersion].join(' '), () => {
        expect(instance).toBeDefined();
        expect(instance.apiVersion).toBeDefined();
        expect(instance.name).toBeDefined();
        expect(instance.data).toBeDefined();
    });

    describe('métodos principales', () => {
        it('setItems incluye el dato en data.items', () => {
            items.push(item);
            expect(instance.setItems).toBeDefined();
            expect(instance.setItems(items)).toBeDefined();
            expect(instance.data.items).toBe(items);
            instance.setItems([]);
            expect(instance.data.items.length).toBe(0);
            instance.setItems();
            expect(instance.data.items.length).toBe(0);
        });
        it('setObject incluye el dato en data.self', () => {
            expect(instance.setObject).toBeDefined();
            expect(instance.setObject(item)).toBeDefined();
            expect(instance.data.self).toBe(item);
        });
        it('setError incluye la excepción en error', () => {
            expect(instance.setError).toBeDefined();
            expect(instance.setError(error)).toBeDefined();
            expect(instance.error).toBe(error);
        });
    });

    describe('En la paginación inicial con startIndex=0 se cumple', () => {
        beforeEach(() => {
            items.push(one);
            items.push(two);
            items.push(three);
            instance.setItems(items);
        });

        it('se muestran los elementos esperados', () => {
            expect(items.length).toBe(3);
        });

        it('self es "one"', () => {
            expect(instance.data.self).toBe(one);
        });
        it('next es "two"', () => {
            expect(instance.data.next).toBe(two);
        });
        it('previous es "three"', () => {
            expect(instance.data.previous).toBe(three);
        });
    });

    describe('En la paginación con startIndex=1 se cumple', () => {
        beforeEach(() => {
            items.push(one);
            items.push(two);
            items.push(three);
            instance.setItems(items)
                .setPagination(new BosonPagination(1));
        });

        it('se muestran los elementos esperados', () => {
            expect(items.length).toBe(3);
        });

        it('self es "two"', () => {
            expect(instance.data.self).toBe(two);
        });
        it('next es "three"', () => {
            expect(instance.data.next).toBe(three);
        });
        it('previous es "one"', () => {
            expect(instance.data.previous).toBe(one);
        });
    });

    describe('En la paginación con startIndex=2 se cumple', () => {
        beforeEach(() => {
            items.push(one);
            items.push(two);
            items.push(three);
            instance.setItems(items)
                .setPagination(new BosonPagination(2));
        });

        it('se muestran los elementos esperados', () => {
            expect(items.length).toBe(3);
        });

        it('self es "three"', () => {
            expect(instance.data.self).toBe(three);
        });
        it('next es "one"', () => {
            expect(instance.data.next).toBe(one);
        });
        it('previous es "two"', () => {
            expect(instance.data.previous).toBe(two);
        });
    });



});
