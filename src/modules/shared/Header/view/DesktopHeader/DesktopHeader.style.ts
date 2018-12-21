import injectSheet, { Theme, WithStyles } from 'react-jss';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({

  root: rule({
    height: '100%',
    background: theme.colors.white,
    padding: `0 ${theme.spacing.mainContentPadding.desktop}`,
    display: 'flex',
    alignItems: 'center',
  }),

  link: rule({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: '3.125rem',
    textDecoration: 'none',
    fontFamily: theme.typography.primaryFont,
    fontSize: '0.9375rem',
    color: theme.palette.text.primary,
  }),

  activeLink: rule({
    composes: '$link',
    fontWeight: 'bold',
    borderBottom: `solid ${theme.palette.control.border.focus} 2px`,
  }),

  logo: rule({
    height: '100%',
    padding: '1.6875rem 4.5rem 1.6875rem 0',
  }),

  profileComponent: rule({
    marginLeft: 'auto',
  }),

});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
