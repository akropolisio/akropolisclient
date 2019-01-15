import { IReduxEntry } from 'shared/types/app';
import * as namespace from './namespace';
import { actions, selectors, reducer } from './redux';

export { namespace, selectors, actions };

export const reduxEntry: IReduxEntry = {
  reducers: { user: reducer },
};