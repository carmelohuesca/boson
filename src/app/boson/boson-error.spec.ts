import { BosonError } from './boson-error';
describe('BosonError', () => {
    let instance: BosonError;

    beforeEach(() => {
        instance = new BosonError();
    });

    it('existe la instancia', () => {
        expect(instance).toBeDefined();
    });

    describe('métodos principales', () => {
        it('setError establece las propiedades principales del error', () => {
            expect(instance.code).toBeDefined();
            expect(instance.message).toBeDefined();
            expect(instance.criticity).toBeDefined();
            expect(instance.code).toBe(BosonError.DEFAULT_ERROR.code);
            expect(instance.message).toBe(BosonError.DEFAULT_ERROR.message);
            expect(instance.criticity).toBe(BosonError.DEFAULT_ERROR.criticity);
        });
        it('la instancia se puede generar desde el constructor', () => {
            expect(instance.code).toBe(BosonError.DEFAULT_ERROR.code);
            expect(instance.message).toBe(BosonError.DEFAULT_ERROR.message);
            expect(instance.criticity).toBe(BosonError.DEFAULT_ERROR.criticity);
            instance.setError('404', BosonError.DEFAULT_ERROR.message, 5);
            expect(instance.code).toBe('404');
            expect(instance.message).toBe(BosonError.DEFAULT_ERROR.message);
            expect(instance.criticity).toBe(5);
        });
        it('la excepcion se coloca sobre la lista de errores del propio error', () => {
            instance.addException(new BosonError());
            expect(instance.errors.length).toBe(1);
            instance.addException(new BosonError());
            expect(instance.errors.length).toBe(2);
        });
    });

});
