import { bind } from 'decko';
import HttpActions from './HttpActions';
import Transactions from './Transactions';
import User from './User';

import BaseApi from './BaseApi';

class Api {
  public transactions: Transactions;
  public user: User;

  private actions: HttpActions;

  constructor(public baseUrl: string, public version: string = 'v1') {
    this.actions = new HttpActions(`${baseUrl}/${version}`);
    this.transactions = new Transactions(this.actions);
    this.user = new User(this.actions);

  }

  @bind
  public setToken(token: string | null) {
    const apiSet: BaseApi[] = [this.transactions, this.user];

    apiSet.forEach(item => item.token = token);
  }
}

export default Api;
