import { BosonPagination } from './boson-pagination';
describe('BosonPagination', () => {

    let instance: BosonPagination;

    beforeEach(() => {
        instance = new BosonPagination();
    });

    it('existe la instancia', () => {
        expect(instance).toBeDefined();
    });

    describe('propiedades de BosonPagination()', () => {
        it('startIndex vale al menos 0', () => {
            expect(instance.startIndex).toBe(0);
        });
        it('itemsPerPage vale al menos 1', () => {
            expect(instance.itemsPerPage).toBe(1);
        });
        it('pageIndex vale al menos 1', () => {
            expect(instance.pageIndex).toBe(1);
        });
    });

    describe('propiedades de BosonPagination(0, 0, -10)', () => {
        beforeEach(() => {
            instance = new BosonPagination(0, 0, -10);
        });
        it('startIndex menor vale 0', () => {
            expect(instance.startIndex).toBe(0);
        });
        it('itemsPerPage menor vale 1', () => {
            expect(instance.itemsPerPage).toBe(1);
        });
        it('pageIndex menor vale 1', () => {
            expect(instance.pageIndex).toBe(1);
        });
    });

    describe('propiedades de BosonPagination(10, 10, 4)', () => {
        beforeEach(() => {
            instance = new BosonPagination(4, 10, 10);
        });
        it('startIndex menor vale 4', () => {
            expect(instance.startIndex).toBe(4);
        });
        it('itemsPerPage menor vale 10', () => {
            expect(instance.itemsPerPage).toBe(10);
        });
        it('pageIndex menor vale 10', () => {
            expect(instance.pageIndex).toBe(10);
        });
    });

});
