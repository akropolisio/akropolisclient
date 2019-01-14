import { ID } from './common';

export interface IFund {
  id: ID;
  logo: string;
  title: string;
  commission: number;
  policy: string;
  chosen?: boolean;
}
