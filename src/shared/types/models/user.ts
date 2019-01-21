import { ID } from './common';

export type UserRole = 'beneficiary' | 'fundOwner' | 'boardMember' | 'assetManager';

export interface IUser {
  name: string;
  surname: string;
}

export interface IUserEditableFields {
  name: string;
  surname: string;
}

export interface IContributor {
  id: ID;
  wallet: string;
}
