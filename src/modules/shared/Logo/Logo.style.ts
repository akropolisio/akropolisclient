import injectSheet, { Theme, WithStyles } from 'react-jss';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({

  root: rule({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  }),

  title: rule({
    fontSize: '0.75rem',
    fontFamily: theme.typography.primaryFont,
    fontWeight: 'bold',
    color: theme.colors.heavyMetal,
    textTransform: 'uppercase',
    letterSpacing: '0.15rem',

    [theme.breakpoints.up('sm')]: rule({
      fontSize: '1.25rem',
    }),
  }),

  logo: rule({
    flexShrink: 0,
    marginRight: '0.7rem',
    fontSize: '2.3875rem',
    [theme.breakpoints.up('sm')]: rule({
      fontSize: '4rem',
    }),
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
