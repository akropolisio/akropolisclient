import * as namespace from './namespace';
import { actions, selectors, reducer } from './redux';
import { IReduxEntry } from 'shared/types/app';

export { namespace, selectors, actions };
export * from './view/containers';

export const reduxEntry: IReduxEntry = {
  reducers: { adaptability: reducer },
};
