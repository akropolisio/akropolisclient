import { ID } from './common';

export interface IFund {
  id: ID;
  logo: string;
  title: string;
  commission: number;
  policy: string;
  chosen?: boolean;
}

export interface IUserFund {
  id: ID;
  acronym: string;
  title: string;
  type: string;
  policy: string;
  totalSum: number;
  incomeMonthly: number;
  pensionDate: string;
}
