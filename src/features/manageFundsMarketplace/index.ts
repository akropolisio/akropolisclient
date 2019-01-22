import { getAsyncContainer } from 'core/FeatureConnector';
import { loadEntry } from './loader';

export const FundsMarketplace = getAsyncContainer(loadEntry, 'FundsMarketplace');

export { loadEntry } from './loader';
