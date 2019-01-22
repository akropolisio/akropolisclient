import { getAsyncContainer } from 'core/FeatureConnector';
import { loadEntry } from './loader';

export const UserFunds = getAsyncContainer(loadEntry, 'UserFunds');

export { Entry } from './entry';
export { loadEntry } from './loader';
