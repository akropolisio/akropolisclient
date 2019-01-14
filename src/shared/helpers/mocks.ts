import { ITransaction } from 'shared/view/drafts/ShowTransactions';
import { IUserFund } from 'shared/view/drafts/UserFunds/namespace';

const transaction: ITransaction = {
  date: '15/12/2018 15:35',
  fundName: 'StandartLife',
  sender: 'Pavel Klimov',
  receiver: 'Reciever',
  type: 'Investment in PF',
  amount: 343.343,
};

export const transactionsMocks = [transaction, transaction, transaction, transaction, transaction];

const fund = {
  type: 'State pension', policy: '23313445',
  pensionDate: 'Dec 2022', totalSum: 11343.31, incomeMonthly: 343.31,
};

export const fundsMock: IUserFund[] = [
  { acronym: 'st', title: 'Standart life', ...fund },
  { acronym: 'th', title: 'The people’s pension', ...fund },
  { acronym: 'Zu', title: 'Zurich', ...fund },
  { acronym: 'Li', title: 'Libery pension', ...fund },
];
