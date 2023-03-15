import { IPagination, IQueryPagination } from '../interfaces';

const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_LIMIT = 0;

export const getPagination = ({ page = DEFAULT_PAGE_NUMBER, limit = DEFAULT_PAGE_LIMIT }: Partial<IQueryPagination>): IPagination => {
  const pageNumber = Math.abs(page);
  const pageLimit = Math.abs(limit);
  const skip = (pageNumber - 1) * pageLimit;

  return {
    skip,
    limit
  };
};
