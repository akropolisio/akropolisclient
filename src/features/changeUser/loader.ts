import { Entry } from './entry';

export async function loadEntry(): Promise<Entry> {
  const feature = await import(/* webpackChunkName: "changeUser" */ './entry');
  return feature.entry;
}
