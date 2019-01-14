import { ITransaction } from 'shared/view/drafts/ShowTransactions';

const transaction: ITransaction = {
  date: '15/12/2018 15:35',
  fundName: 'StandartLife',
  sender: 'Pavel Klimov',
  receiver: 'Reciever',
  type: 'Investment in PF',
  amount: 343.343,
};

export const transactionsMocks = [transaction, transaction, transaction, transaction, transaction];
