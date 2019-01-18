import * as React from 'react';
import { bind } from 'decko';

import {
  Resource, CleanedListProviderPropsByResource, DataByResource, IListRequest, IListProviderProps, ISortParams,
  IPaginationParams, IListProviderChildrenProps, AvailabilitySortByResource, AvailabilityPaginationByResource,
  SortOrder,
} from 'shared/types/models';
import { ICommunication } from 'shared/types/redux';

import { IReduxState } from '../../../namespace';
import * as actions from '../../../redux/actions';
import { initial } from '../../../redux/initial';
import * as selectors from '../../../redux/selectors';
import { multiConnect } from 'shared/helpers/redux';
import { Dispatch, bindActionCreators } from 'redux';

interface IStateProps {
  loading: ICommunication;
  items: Array<DataByResource[Resource]>;
  total: number;
  request: IListRequest<Resource> | null;
}

interface IActionProps {
  loadList: typeof actions.loadList;
}

type IProps = IListProviderProps & IStateProps & IActionProps;

interface IState {
  sort: ISortParams<string> | null;
  pagination: IPaginationParams | null;
  filter: null;
}

function mapState(state: IReduxState): IStateProps {
  const data = selectors.selectListData(state);
  return {
    loading: selectors.selectListLoading(state),
    items: data.items,
    total: data.total,
    request: data.request,
  };
}

function mapDispatch(dispatch: Dispatch): IActionProps {
  return bindActionCreators({
    loadList: actions.loadList,
  }, dispatch);
}

const sortAvailability: AvailabilitySortByResource = {
  contributors: false,
  fund: true,
  transaction: true,
  userFund: true,
};
const paginationAvailability: AvailabilityPaginationByResource = {
  contributors: false,
  fund: true,
  transaction: true,
  userFund: true,
};
// const filterAvailability: AvailabilityFilterByResource = {
//   contributors: false,
//   fund: false,
//   transaction: false,
//   userFund: false,
// };

const defaultPerPage = 10;

class ListProvider extends React.PureComponent<IProps, IState> {
  public state: IState = {
    sort: this.props.sort ? this.props.sort as ISortParams<string> : null,
    pagination: paginationAvailability[this.props.resource] ? {
      perPage: this.props.perPage || defaultPerPage,
      current: 1,
    } : null,
    filter: null,
  };

  public componentDidMount() {
    this.loadList();
  }

  public render() {
    return this.props.children(this.getChildrenProps());
  }

  @bind
  private loadList() {
    this.props.loadList(this.getRequest());

  }

  @bind
  private getRequest(): IListRequest<Resource> {
    const { resource } = this.props;
    const { sort, pagination, filter } = this.state;
    return {
      filter,
      resource,
      sort: sort ? sort as IListRequest<Resource>['sort'] : undefined,
      pagination: pagination ? pagination : undefined,
    };
  }

  @bind
  private getChildrenProps(): IListProviderChildrenProps {
    const { resource, items, loading, total } = this.props;
    const { pagination, sort, filter } = this.state;
    return {
      items,
      loading: loading.isRequesting,
      error: loading.error,
      filter: filter ? filter : undefined,
      pagination: !pagination ? undefined : {
        perPage: pagination.perPage,
        total,
        currentPage: pagination.current,
        pageCount: this.calcPageCount(),
        loadMore: this.loadMore,
        toPage: this.toPage,
        toNext: this.toNext,
      },
      sort: sortAvailability[resource] ? {
        params: sort as NonNullable<IListProviderChildrenProps['sort']>['params'],
        setSort: this.setSort,
      } : undefined,
    };
  }

  @bind
  private loadMore() {
    const { perPage } = this.props;
    this.setState(state => ({
      pagination: {
        current: state.pagination && state.pagination.current || 1,
        perPage: (state.pagination && state.pagination.perPage || defaultPerPage) + (perPage || defaultPerPage),
      },
    }), this.loadList);
  }

  @bind
  private toNext() {
    this.setState(state => {
      const pageCount = this.calcPageCount(state);
      const currentPage = state.pagination && state.pagination.current || 1;
      return {
        pagination: currentPage === pageCount ? state.pagination : {
          current: Math.min(currentPage + 1, pageCount),
          perPage: state.pagination && state.pagination.perPage || defaultPerPage,
        },
      };
    }, this.loadList);
  }

  @bind
  private toPage(page: number) {
    this.setState(state => {
      const pageCount = this.calcPageCount(state);
      const currentPage = state.pagination && state.pagination.current || 1;
      return {
        pagination: currentPage === page ? state.pagination : {
          current: Math.min(page, pageCount),
          perPage: state.pagination && state.pagination.perPage || defaultPerPage,
        },
      };
    }, this.loadList);
  }

  @bind
  private setSort(field: string, order?: SortOrder) {
    this.setState(state => {
      const orderInvertor: Record<SortOrder, SortOrder> = { asc: 'desc', desc: 'asc' };
      const nextOrder = order || (
        state.sort ? orderInvertor[state.sort.order] : 'asc'
      );

      const isEqualSort = state.sort && state.sort.field === field && state.sort.order === nextOrder;
      return {
        sort: isEqualSort ? state.sort : {
          field,
          order: nextOrder,
        },
      };
    }, this.loadList);
  }

  @bind
  private calcPageCount(state?: IState) {
    const { total } = this.props;
    const { pagination } = state || this.state;
    return Math.floor(total / (pagination && pagination.perPage || defaultPerPage));
  }
}

// tslint:disable-next-line:max-classes-per-file
declare class ResultListProvider<T extends Resource> extends React.Component<CleanedListProviderPropsByResource<T>> { }

export default (
  multiConnect(['dataProvider'], initial, mapState, mapDispatch)(
    ListProvider,
  )
) as typeof ResultListProvider;
