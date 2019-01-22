import { getAsyncContainer } from 'core/FeatureConnector';
import { loadEntry } from './loader';

export const Contributors = getAsyncContainer(loadEntry, 'Contributors');

export { loadEntry } from './loader';
