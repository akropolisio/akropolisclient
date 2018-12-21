import injectSheet, { WithStyles, Theme } from 'react-jss';
import { rule } from 'shared/helpers/style';

import { IProps } from './RowsLayout';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    flexGrow: 1,
    minHeight: '100%',
  }),
  content: rule({
    flexGrow: 1,
  }),

  header: rule({
    height: ({ isMobile }: IProps) => isMobile ? theme.sizes.header.mobile : theme.sizes.header.desktop,
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
