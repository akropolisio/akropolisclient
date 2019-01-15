import { ID } from 'shared/types/models';

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
