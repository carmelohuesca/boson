import { Boson } from './boson';

describe('Boson', () => {

    let instance: Boson = new Boson();
    const items = [];
    const item = { id: 1, name: 'one' };
    const error = { code: 404, message: 'not found', errors: [] };

    beforeEach(() => {
        instance = new Boson();
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

});
