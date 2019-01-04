import { SubsetMapStrict } from '_helpers';
import { UserRole } from './user';

export interface ITransaction {
  txid: string;
}

export type TransactionType = 'signIn' | 'signUp';
export type ABIRequestDataByType = SubsetMapStrict<Record<TransactionType, any>, {
  signIn: {
    role: UserRole;
  };
  signUp: {
    role: UserRole;
    name: string;
    surname: string;
  }
}>;

export type ABIRequest = {
  [key in TransactionType]: {
    uuid: string;
    type: key;
    data: ABIRequestDataByType[key];
  };
}[TransactionType];
