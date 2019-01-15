import { getAsyncContainer } from 'core/FeatureConnector';
import { loadEntry } from './loader';

export const AsyncGetInFundButton = getAsyncContainer(loadEntry, 'GetInFundButton');

export { loadEntry };
export { Entry } from './entry';
