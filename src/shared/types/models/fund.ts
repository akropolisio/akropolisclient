import { ID } from './common';

export interface IFund {
  id: ID;
  acronym: string;
  title: string;
  commission: number;
  policy: string;
  chosen?: boolean;
}
