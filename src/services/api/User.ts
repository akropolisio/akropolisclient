import { delay } from 'redux-saga';
import { IUser, IUserEditableFields } from 'shared/types/models';

import BaseApi from './BaseApi';

class Transactions extends BaseApi {

  public async loadUser(): Promise<IUser> {
    await delay(1000);
    return { name: 'Pavel', surname: 'Kosov' };
  }

  public async editMainInfo(user: IUserEditableFields): Promise<IUser> {
    await delay(1000);
    return user;
  }
}

export default Transactions;
