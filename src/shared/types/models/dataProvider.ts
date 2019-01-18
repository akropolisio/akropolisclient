import { SubSet } from '_helpers';
import { IFund, IUserFund } from './fund';
import { IFundTransaction } from './transactions';
import { IContributor } from './user';

export type Resource = 'fund' | 'userFund' | 'transaction' | 'contributors';

export type SortOrder = 'asc' | 'desc';
export interface ISortParams<F extends string> {
  field: F;
  order: SortOrder;
}

export type SortFieldByResource = SubSet<Record<Resource, string>, {
  contributors: keyof IContributor;
  fund: keyof IFund;
  transaction: keyof IFundTransaction;
  userFund: keyof IUserFund;
}>;

export type SortByResource = SubSet<Record<Resource, ISortParams<string> | null>, {
  contributors: null;
  fund: ISortParams<SortFieldByResource['fund']>;
  transaction: ISortParams<SortFieldByResource['transaction']>;
  userFund: ISortParams<SortFieldByResource['userFund']>;
}>;

export type FilterByResource = SubSet<Record<Resource, object | null>, {
  contributors: null;
  fund: null;
  transaction: null;
  userFund: null;
}>;

export type AvailabilityPaginationByResource = SubSet<Record<Resource, boolean>, {
  contributors: false;
  fund: true;
  transaction: true;
  userFund: true;
}>;
export type AvailabilitySortByResource = {
  [key in Resource]: SortByResource[key] extends null ? false : true;
};
export type AvailabilityFilterByResource = {
  [key in Resource]: FilterByResource[key] extends null ? false : true;
};

export type DataByResource = SubSet<Record<Resource, any>, {
  contributors: IContributor;
  fund: IFund;
  transaction: IFundTransaction;
  userFund: IUserFund;
}>;

export interface IPaginationParams {
  perPage: number;
  current: number;
}

export interface IListRequest<T extends Resource> {
  resource: T;
  sort?: SortByResource[T];
  filter?: FilterByResource[T];
  pagination?: IPaginationParams;
}

export type ListRequestUnion = {
  [key in Resource]: IListRequest<key>;
}[Resource];

export interface IListResponse<T extends Resource> {
  data: Array<DataByResource[T]>;
  total: number;
}

export interface IListProviderProps {
  resource: Resource;
  sort?: Partial<SortByResource[Resource]>;
  filter?: Partial<FilterByResource[Resource]>;
  perPage?: number;
  children(props: IListProviderChildrenProps): React.ReactNode;
}

export type CleanedListProviderPropsByResource<R extends Resource> = {
  [key in Resource]: {
    resource: key;
    children(props: CleanedListProviderChildrenPropsByResource<R>): React.ReactNode;
  } & (
    SortByResource[key] extends null ? {} : { sort?: Partial<SortByResource[key]>; }
  ) & (
    FilterByResource[key] extends null ? {} : { filter?: Partial<FilterByResource[key]>; }
  ) & (
    AvailabilityPaginationByResource[key] extends true ? { perPage?: number } : {}
  );
}[R];

interface ICommonListProviderChildrenProps<T extends Resource> {
  loading: boolean;
  error?: string;
  items: Array<DataByResource[T]>;
}

export type IListProviderChildrenProps = ICommonListProviderChildrenProps<Resource> & {
  sort?: ISortToChildrenProps<Resource> | null;
  filter?: FilterByResource[Resource] | null;
  pagination?: IPaginationToChildrenProps;
};

export type CleanedListProviderChildrenPropsByResource<R extends Resource> = {
  [key in Resource]: ICommonListProviderChildrenProps<R> & (
    SortByResource[key] extends null ? {} : {
      sort: ISortToChildrenProps<key> | null;
    }
  ) & (
    FilterByResource[key] extends null ? {} : {
      filter: FilterByResource[key] | null;
    }
  ) & (
    AvailabilityPaginationByResource[key] extends true ? {
      pagination: IPaginationToChildrenProps;
    } : {}
  );
}[R];

export type ISortToChildrenProps<T extends Resource> = {
  params?: SortByResource[T];
} & {
  setSort(field: SortFieldByResource[T], order?: SortOrder): void;
};

export interface IPaginationToChildrenProps {
  currentPage: number;
  pageCount: number;
  perPage: number;
  total: number;
  toPage(value: number): void;
  toNext(): void;
  loadMore(): void;
}
