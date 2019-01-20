import { bind } from 'decko';
import { delay } from 'redux-saga';

import { Resource, DataByResource, IListResponse, ListRequestUnion, ID } from 'shared/types/models';
import { transactionsMock, userFundsMock, contributorsMock, fundsMock } from 'shared/helpers/mocks';
import BaseApi from './BaseApi';
import * as R from 'ramda';

function makeMocks<T extends { id: ID }>(values: T[]): T[] {
  const coef = Math.ceil(Math.random() * 5 + 10);
  return R.flatten<T>(Array.from<T[]>({ length: coef }).fill(values)).map((item, index) => ({ ...item, id: index }));
}

const mockByResource: { [key in Resource]: Array<DataByResource[key]> } = {
  transaction: makeMocks(transactionsMock),
  contributors: makeMocks(contributorsMock),
  userFund: makeMocks(userFundsMock),
  fund: makeMocks(fundsMock),
};

class Data extends BaseApi {
  @bind
  public async loadList<T extends Resource>(request: ListRequestUnion): Promise<IListResponse<T>> {
    console.log('>> loadList request', request);
    const { pagination: p } = request;
    await delay(1000);
    const allDate = mockByResource[request.resource] as Array<DataByResource[T]>;
    const data = p
      ? allDate.slice((p.current - 1) * p.perPage, p.current * p.perPage)
      : allDate;

    const response = {
      data,
      total: allDate.length,
    };
    console.log('>> loadList response', response);

    return response;
  }
}

export default Data;
