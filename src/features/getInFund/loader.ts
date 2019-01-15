import { Entry } from './entry';

export async function loadEntry(): Promise<Entry> {
  const feature = await import(/* webpackChunkName: "getInFund" */ './entry');
  return feature.entry;
}
