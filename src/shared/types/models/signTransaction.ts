import { SubsetMapStrict } from '_helpers';
import { UserRole } from './user';
import { TimePeriod, ID } from './common';

export interface ITransaction {
  txid: string;
}

export type TransactionType = 'signIn' | 'signUp' | 'getInFund' | 'depositToFund';
export type ABIRequestDataByType = SubsetMapStrict<Record<TransactionType, any>, {
  signIn: {
    role: UserRole;
  };
  signUp: {
    role: UserRole;
    name: string;
    surname: string;
  };
  getInFund: {
    fundId: ID;
    regularPayment: number;
    periodicity: TimePeriod;
    retirementDate: number;
    wallet: string;
  };
  depositToFund: {
    fundId: ID;
  };
}>;

export type ABIRequest = {
  [key in TransactionType]: {
    uuid: string;
    type: key;
    data: ABIRequestDataByType[key];
  };
}[TransactionType];
