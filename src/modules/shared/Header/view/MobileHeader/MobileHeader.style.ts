import injectSheet, { Theme, WithStyles } from 'react-jss';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({

  root: rule({
    zIndex: theme.zIndex.mobileHeader,
    position: 'fixed',
    width: '100%',
    height: theme.sizes.header.mobile,
    background: theme.colors.white,
    padding: `0 ${theme.spacing.mainContentPadding.mobile}`,
    borderTop: `solid ${theme.colors.alto} 1px`,
    borderBottom: `solid ${theme.colors.alto} 1px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),

  hiddenBottomBorder: rule({
    borderBottomColor: theme.colors.white,
  }),

  toogleMenu: rule({
    width: '1.625rem',
    padding: '0 0.25rem',
    display: 'flex',
    alignItems: 'center',
  }),

  menu: rule({
    position: 'fixed',
    background: theme.colors.white,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    marginTop: theme.sizes.header.mobile,
  }),

  linksList: rule({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '3.3125rem',
    marginTop: '1.125rem',
    borderTop: `solid ${theme.colors.dustyGray} 1px`,
  }),

  listItem: rule({
    padding: ' 0.9375rem 0',
    borderBottom: `solid ${theme.colors.dustyGray} 1px`,
  }),

  link: rule({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: '3.125rem',
    textDecoration: 'none',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.primaryFont,
    tapHighlightColor: 'rgba(0,0,0,0)',
  }),

  activeLink: rule({
    composes: '$link',
    fontWeight: 'bold',
  }),

  logo: rule({
    height: '100%',
    padding: '0.5rem 0',
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
