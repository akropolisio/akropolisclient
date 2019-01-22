import { getAsyncContainer } from 'core/FeatureConnector';
import { loadEntry } from './loader';

export const UserFunds = getAsyncContainer(loadEntry, 'UserFunds');

export { loadEntry } from './loader';
