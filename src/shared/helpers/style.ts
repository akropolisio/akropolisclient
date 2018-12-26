import { CSSProperties } from 'react-jss';

export function rule(props: CSSProperties): CSSProperties {
  return props;
}

export function styledBy<Props extends Record<K, string>, K extends keyof Props>(
  property: K, mapping: Record<Props[K], string | number>,
) {
  return (props: Props) => mapping[props[property]];
}
