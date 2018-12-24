import injectSheet, { Theme, WithStyles } from 'react-jss';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({

  root: rule({
    display: 'flex',
    alignItems: 'center',
    background: theme.colors.white,
    maxWidth: theme.sizes.page.maxWidth,
    minHeight: theme.sizes.header.minHeightMobile,
    padding: `${theme.spacing.unit * 2} ${theme.spacing.unit * 2}px`,
    borderTop: `solid ${theme.colors.alto} 1px`,
    borderBottom: `solid ${theme.colors.alto} 1px`,
    zIndex: theme.zIndex.mobileHeader,
    justifyContent: 'space-between',

    [theme.breakpoints.up('sm')]: rule({
      position: 'static',
      height: '100%',
      padding: `0 ${theme.spacing.mainContentPadding.desktop}`,
      border: 'none',
      justifyContent: 'inherit',
    }),
  }),

  desktopLinks: rule({
    display: 'none',
    height: '100%',
    [theme.breakpoints.up('sm')]: rule({
      display: 'flex',
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
    [theme.breakpoints.up('sm')]: rule({
      padding: '1.1875rem 4.5rem 1.1875rem 0',
    }),
  }),

  profileComponent: rule({
    marginLeft: 'auto',
    display: 'none',

    [theme.breakpoints.up('sm')]: rule({
      display: 'block',
    }),
  }),

  hiddenBottomBorder: rule({
    borderBottomColor: theme.colors.white,
  }),

  toggleMenu: rule({
    display: 'flex',
    padding: '0 0.25rem',
    marginLeft: 'auto',
    fontSize: '1.5rem',
    color: theme.colors.dustyGray,

    [theme.breakpoints.up('sm')]: rule({
      display: 'none',
    }),
  }),

  mobileMenu: rule({
    display: 'block',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: theme.sizes.header.minHeightMobile,
    background: theme.colors.white,

    [theme.breakpoints.up('sm')]: rule({
      display: 'none',
    }),
  }),

  linksList: rule({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '3.0125rem',
    marginTop: '1.825rem',
    borderTop: `solid ${theme.colors.dustyGray} 1px`,
  }),

  listItem: rule({
    padding: ' 0.96rem 0',
    borderBottom: `solid ${theme.colors.dustyGray} 1px`,
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
