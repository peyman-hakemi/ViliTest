export interface PaginationObject {
  url?: string;
  page: number;
  total_results?: number;
  per_page?: number;
  next_page?: number | string;
  prev_page?: number | string;
}
