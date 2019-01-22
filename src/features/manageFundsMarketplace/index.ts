import { getAsyncContainer } from 'core/FeatureConnector';
import { loadEntry } from './loader';

export const FundsMarketplace = getAsyncContainer(loadEntry, 'FundsMarketplace');

export { Entry } from './entry';
export { loadEntry } from './loader';
