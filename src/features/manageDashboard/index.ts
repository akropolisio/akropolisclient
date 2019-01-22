import { getAsyncContainer } from 'core/FeatureConnector';
import { loadEntry } from './loader';

export const Dashboard = getAsyncContainer(loadEntry, 'Dashboard');

export { Entry } from './entry';
export { loadEntry } from './loader';
