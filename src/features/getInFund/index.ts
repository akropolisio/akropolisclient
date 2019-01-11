import { loadEntry } from './loader';
import { getAsyncContainer } from 'core/FeatureConnector';

export const AsyncGetInFundButton = getAsyncContainer(loadEntry, 'GetInFundButton');

export { loadEntry };
export { Entry } from './entry';
