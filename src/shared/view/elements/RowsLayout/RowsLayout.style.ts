import injectSheet, { WithStyles, Theme } from 'react-jss';
import { rule, styledBy } from 'shared/helpers/style';

import { IProps } from './RowsLayout';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    flexGrow: 1,
    minHeight: '100%',
    backgroundColor: styledBy<IProps, 'background'>('background', {
      primary: theme.colors.white,
      unset: 'unset',
    }, 'unset'),
  }),
  content: rule({
    flexGrow: 1,
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
