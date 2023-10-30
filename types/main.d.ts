export type SortType = 'asc' | 'desc';

export type Item = Record<string, any>;

export type Header = {
  text: string;
  value: string;
  sortable?: boolean;
  fixed?: boolean;
  width?: number;
  func?: Function;
};

export type UpdateSortArgument = {
  sortType: SortType | null;
  sortBy: string;
};
