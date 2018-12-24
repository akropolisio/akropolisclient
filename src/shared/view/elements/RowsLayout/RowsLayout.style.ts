import injectSheet, { WithStyles, Theme } from 'react-jss';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    flexGrow: 1,
    minHeight: '100%',
  }),
  content: rule({
    flexGrow: 1,
  }),

  header: rule({
    height: theme.sizes.header.mobile,
    [theme.breakpoints.up('sm')]: {
      height: theme.sizes.header.desktop,
    },
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
