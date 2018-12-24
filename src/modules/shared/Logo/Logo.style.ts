import injectSheet, { Theme, WithStyles } from 'react-jss';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({

  root: rule({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  }),

  title: rule({
    fontSize: '0.75rem',
    fontFamily: theme.typography.primaryFont,
    fontWeight: 'bold',
    color: '#1d1d1b',
    textTransform: 'uppercase',
    letterSpacing: '0.0437rem',

    [theme.breakpoints.up('sm')]: rule({
      fontSize: '1.25rem',
    }),
  }),

  logo: rule({
    height: '100%',
    flexShrink: 1,
    fontSize: '2.1875rem',
    [theme.breakpoints.up('sm')]: rule({
      fontSize: '4rem',
    }),
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
