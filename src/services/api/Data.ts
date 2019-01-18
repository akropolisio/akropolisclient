import { bind } from 'decko';
import { delay } from 'redux-saga';

import { Resource, DataByResource, IListResponse, ListRequestUnion } from 'shared/types/models';
import { transactionsMock, userFundsMock, contributorsMock, fundsMock } from 'shared/helpers/mocks';
import BaseApi from './BaseApi';

const mockByResource: { [key in Resource]: Array<DataByResource[key]> } = {
  transaction: transactionsMock,
  contributors: contributorsMock,
  userFund: userFundsMock,
  fund: fundsMock,
};

class Data extends BaseApi {
  @bind
  public async loadList<T extends Resource>(request: ListRequestUnion): Promise<IListResponse<T>> {
    console.log('>> loadList request', request);
    await delay(1000);
    const data = mockByResource[request.resource] as Array<DataByResource[T]>;
    return {
      data,
      total: data.length,
    };
  }
}

export default Data;
