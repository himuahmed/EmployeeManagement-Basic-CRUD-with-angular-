export interface Pagination{
    currentPage: number;
    pageSize: number;
    totalPage: number;
    totalCount: number;
}

export class PaginatedResult<T> {
    result: T;
    pagination: Pagination;
}