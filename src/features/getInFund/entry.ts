import * as containers from './view/containers';
import makeFeatureEntry from 'shared/helpers/makeFeatureEntry';

const entry = makeFeatureEntry(
  containers, null, null,
);

type Entry = typeof entry;

export { Entry, entry };
