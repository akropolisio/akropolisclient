import makeFeatureEntry from 'shared/helpers/makeFeatureEntry';
import { IReduxEntry } from 'shared/types/app';

import * as containers from './view/containers';
import { actions, selectors, reducer, getSaga } from './redux';

const entry = makeFeatureEntry(
  containers,
  actions,
  selectors,
  {
    reducers: { changeUser: reducer },
    sagas: [getSaga],
  } as IReduxEntry,
);

type Entry = typeof entry;

export { Entry, entry };
