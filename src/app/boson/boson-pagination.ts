export class BosonPagination {

    itemsPerPage: number;
    pageIndex: number;
    startIndex: number;

    constructor(startIndex?: number, itemsPerPage?: number, pageIndex?: number) {
        this.itemsPerPage = this.upperThan(itemsPerPage, 1);
        this.pageIndex = this.upperThan(pageIndex, 1);
        this.startIndex = this.upperThan(startIndex, 0);
    }

    private upperThan(value: number, limit: number) {
        return value >= limit ? value : limit;
    }

}
