import * as R from 'ramda';
import injectSheet, { WithStyles, Theme, CSSProperties } from 'react-jss';

import { rule } from 'shared/helpers/style';
import { breakpointKeys } from 'shared/styles/breakpoints';

function generateMediaQueries(theme: Theme['extra']) {
  const from = R.mergeAll<Record<string, CSSProperties>>(
    breakpointKeys.map(item => ({
      [`from${item.toUpperCase()}`]: rule({
        '&$root': {
          [theme.breakpoints.down(item)]: {
            display: 'none',
          },
        },
      }),
    })),
  );

  const to = R.mergeAll<Record<string, CSSProperties>>(
    breakpointKeys.map(item => ({
      [`to${item.toUpperCase()}`]: rule({
        '&$root': {
          [theme.breakpoints.up(item)]: {
            display: 'none',
          },
        },
      }),
    })),
  );

  return R.mergeAll<Record<string, CSSProperties>>([from, to]);
}

const styles = ({ extra: theme }: Theme): Record<string, CSSProperties> => ({
  root: {},
  ...generateMediaQueries(theme),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
