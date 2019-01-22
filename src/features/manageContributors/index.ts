import { getAsyncContainer } from 'core/FeatureConnector';
import { loadEntry } from './loader';

export const Contributors = getAsyncContainer(loadEntry, 'Contributors');

export { Entry } from './entry';
export { loadEntry } from './loader';
