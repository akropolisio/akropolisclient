import { getAsyncContainer } from 'core/FeatureConnector';
import { loadEntry } from './loader';

export const Dashboard = getAsyncContainer(loadEntry, 'Dashboard');

export { loadEntry } from './loader';
