import { ID } from './common';

export interface IFundTransaction {
  id: ID;
  date: string;
  fundName: string;
  sender: string;
  receiver: string;
  type: string;
  amount: number;
}
