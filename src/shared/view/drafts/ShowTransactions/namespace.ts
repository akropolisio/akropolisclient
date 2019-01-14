// type TransactionFieldsLabel = 'date' | 'fundName' | 'sender' | 'receiver' | 'type' | 'amount';

// export interface ITransactionFields {
//   id: keyof ITransaction;
//   label: string;
// }

export interface ITransaction {
  date: string;
  fundName: string;
  sender: string;
  receiver: string;
  type: string;
  amount: number;
}
