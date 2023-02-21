export interface IQueryPagination {
  limit: number;
  page: number;
  start: Date;
  end: Date;
  order: number;
}

export interface IPagination {
  skip: number;
  limit: number;
}

