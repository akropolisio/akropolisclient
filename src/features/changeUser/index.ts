import { getAsyncContainer } from 'core/FeatureConnector';

import { loadEntry } from './loader';

export const AsyncEditMainInfo = getAsyncContainer(loadEntry, 'EditMainInfo');

export { loadEntry };
export { Entry } from './entry';
