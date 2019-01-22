import { getAsyncContainer } from 'core/FeatureConnector';
import { loadEntry } from './loader';

export const CompletedTransactions = getAsyncContainer(loadEntry, 'CompletedTransactions');

export { loadEntry } from './loader';
