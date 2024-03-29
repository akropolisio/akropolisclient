import { bind } from 'decko';
import HttpActions from './HttpActions';
import Transactions from './Transactions';
import BaseApi from './BaseApi';

class Api {
  public transactions: Transactions;

  private actions: HttpActions;

  constructor(public baseUrl: string, public version: string = 'v1') {
    this.actions = new HttpActions(`${baseUrl}/${version}`);
    this.transactions = new Transactions(this.actions);
  }

  @bind
  public setToken(token: string | null) {
    const apiSet: BaseApi[] = [this.transactions];

    apiSet.forEach(item => item.token = token);
  }
}

export default Api;
