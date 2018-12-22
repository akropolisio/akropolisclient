type Value = string | number;

function matchProp<P extends Value | undefined>(prop: P) {
  function f<M extends Record<Exclude<P, undefined>, Value>>(
    valuesByProp: M,
    defaultValue: Value = '',
  ) {
    if (!(prop in valuesByProp)) {
      return defaultValue;
    }
    const mapper = (valuesByProp as any)[prop];
    return mapper || defaultValue;
  }
  return f;
}

export default matchProp;
