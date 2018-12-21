import injectSheet, { Theme, WithStyles } from 'react-jss';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({

  root: rule({
    display: 'flex',
    height: '100%',
    padding: `0 ${theme.spacing.mainContentPadding.desktop}`,
    alignItems: 'center',
    background: theme.colors.white,

    ...theme.respondTo('sm', {
      position: 'fixed',
      width: '100%',
      height: theme.sizes.header.mobile,
      zIndex: theme.zIndex.mobileHeader,
      padding: `0 ${theme.spacing.mainContentPadding.mobile}`,
      borderTop: `solid ${theme.colors.alto} 1px`,
      borderBottom: `solid ${theme.colors.alto} 1px`,
      justifyContent: 'space-between',
    }),
  }),

  desktopLinks: rule({
    display: 'flex',
    alignItems: 'center',
    ...theme.respondTo('sm', {
      display: 'none',
    }),
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

  withBorder: rule({
    borderBottom: `solid ${theme.palette.control.border.focus} 2px`,
  }),

  logo: rule({
    height: '100%',
    padding: '1.6875rem 4.5rem 1.6875rem 0',
    ...theme.respondTo('sm', {
      padding: '0.5rem 0',
    }),
  }),

  profileComponent: rule({
    marginLeft: 'auto',
    ...theme.respondTo('sm', {
      display: 'none',
    }),
  }),

  hiddenBottomBorder: rule({
    borderBottomColor: theme.colors.white,
  }),

  toogleMenu: rule({
    display: 'none',
    width: '1.625rem',
    padding: '0 0.25rem',
    alignItems: 'center',
    marginLeft: 'auto',
    color: theme.colors.dustyGray,
    ...theme.respondTo('sm', {
      display: 'flex',
    }),
  }),

  mobileMenu: rule({
    display: 'none',
    position: 'fixed',
    background: theme.colors.white,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    marginTop: theme.sizes.header.mobile,
    ...theme.respondTo('sm', {
      display: 'block',
    }),
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
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
