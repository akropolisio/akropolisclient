import injectSheet, { Theme, WithStyles } from 'react-jss';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({

  root: rule({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: '1em',
  }),

  title: rule({
    fontSize: '0.45em',
    fontFamily: theme.typography.primaryFont,
    fontWeight: 'bold',
    color: theme.colors.heavyMetal,
    textTransform: 'uppercase',
    letterSpacing: '0.07em',
  }),

  logo: rule({
    fontSize: '1em',
    flexShrink: 0,
    marginRight: '0.5em',
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
