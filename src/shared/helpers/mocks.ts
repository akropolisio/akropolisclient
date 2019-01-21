import { IFundTransaction, IContributor, IUserFund, IFund } from 'shared/types/models';

const transaction: IFundTransaction = {
  id: 1,
  date: '15/12/2018 15:35',
  fundName: 'StandartLife',
  sender: 'Pavel Klimov',
  receiver: 'Reciever',
  type: 'Investment in PF',
  amount: 343.343,
};

export const transactionsMock = [transaction, transaction, transaction, transaction, transaction];

const commonUserFundProps = {
  type: 'State pension', policy: '23313445',
  pensionDate: 'Dec 2022', totalSum: 11343.31, incomeMonthly: 343.31,
};
export const userFundsMock: IUserFund[] = [
  { id: 1, acronym: 'st', title: 'Standart life', ...commonUserFundProps },
  { id: 2, acronym: 'th', title: 'The people’s pension', ...commonUserFundProps },
  { id: 3, acronym: 'Zu', title: 'Zurich', ...commonUserFundProps },
  { id: 4, acronym: 'Li', title: 'Libery pension', ...commonUserFundProps },
];

export const contributorsMock: IContributor[] = [
  { id: 1, wallet: '0x00112233445566778899AABBCCDDEEFF' },
  { id: 2, wallet: '0x00112233445566778899AABBCCDDEEFF' },
  { id: 3, wallet: '0x00112233445566778899AABBCCDDEEFF' },
  { id: 4, wallet: '0x00112233445566778899AABBCCDDEEFF' },
  { id: 5, wallet: '0x00112233445566778899AABBCCDDEEFF' },
  { id: 6, wallet: '0x00112233445566778899AABBCCDDEEFF' },
];

const commonFundProps = { commission: 15, policy: '0x00000000000000000000000' };
export const fundsMock: IFund[] = [
  { id: 1, logo: 'st', title: 'Standart life', ...commonFundProps },
  { id: 2, logo: 'th', title: 'The people’s pension', ...commonFundProps, chosen: true },
  { id: 3, logo: 'Zu', title: 'Zurich', ...commonFundProps },
  { id: 4, logo: 'Li', title: 'Libery pension', ...commonFundProps },
];
