
type breakpointsType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export const keys: breakpointsType[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const values: { [key: string]: number } = {
  xs: 0,
  sm: 760,
  md: 960,
  lg: 1280,
  xl: 1920,
};
const unit = 'px';
const step = 5;

function up(key: breakpointsType) {
  const value = typeof values[key] === 'number' ? values[key] : key;
  return `@media (min-width:${value}${unit})`;
}

function down(key: breakpointsType) {
  const endIndex = keys.indexOf(key) + 1;
  const upperbound = values[keys[endIndex]];

  if (endIndex === keys.length) {
    return up('xs');
  }

  const value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;

  if (typeof value === 'number') {
    return `@media (max-width:${value - step / 100}${unit})`;
  }
}

function between(start: breakpointsType, end: breakpointsType) {
  const endIndex = keys.indexOf(end) + 1;

  if (endIndex === keys.length) {
    return up(start);
  }

  return (
    `@media (min-width:${values[start]}${unit}) and ` +
    `(max-width:${values[keys[endIndex]] - step / 100}${unit})`
  );
}

function only(key: breakpointsType) {
  return between(key, key);
}

function width(key: breakpointsType) {
  return values[key];
}

export default {
  keys,
  values,
  up,
  down,
  between,
  only,
  width,
};
