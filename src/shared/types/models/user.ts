export type UserRole = 'beneficiary' | 'fundOwner' | 'boardMember' | 'assetManager';

export interface IUser {
  name: string;
  surname: string;
}

export interface IUserEditableFields {
  name: string;
  surname: string;
}
