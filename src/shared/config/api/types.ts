export interface ResWithPagination<T> {
  success: boolean;
  message: string;
  links: Links;
  total_items: number;
  total_pages: number;
  page_size: number;
  current_page: number;
  data: T[];
}

interface Links {
  next: number | null;
  previous: number | null;
}

export interface ReqWithPagination {
  _start?: number;
  _limit?: number;
}
