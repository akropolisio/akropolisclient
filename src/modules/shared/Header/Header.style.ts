import injectSheet, { Theme, WithStyles } from 'react-jss';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({

  root: rule({
    background: theme.colors.white,
    borderTop: `solid ${theme.colors.alto} 1px`,
    borderBottom: `solid ${theme.colors.alto} 1px`,

    [theme.breakpoints.up('sm')]: rule({
      border: 'none',
      boxShadow: '0 1px 2px 0 rgba(224, 224, 224, 0.5)',
    }),

    '&$isMenuOpen': rule({
      borderBottomColor: theme.colors.white,
    }),
  }),

  content: rule({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: theme.sizes.page.maxWidth,
    minHeight: theme.sizes.header.minHeightMobile,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    margin: '0 auto',

    [theme.breakpoints.up('sm')]: rule({
      justifyContent: 'initial',
      minHeight: theme.sizes.header.minHeightDesktop,
      padding: `0 ${theme.spacing.unit * 4}px`,
    }),
  }),

  logo: rule({
    fontSize: '2.3875rem',

    [theme.breakpoints.up('sm')]: rule({
      marginRight: '4.2rem',
      fontSize: '3rem',
    }),
  }),

  desktopMenu: rule({
    display: 'none',
    alignSelf: 'stretch',
    alignItems: 'stretch',

    [theme.breakpoints.up('sm')]: rule({
      display: 'flex',
    }),
  }),

  profileComponent: rule({
    marginLeft: 'auto',
    display: 'none',

    [theme.breakpoints.up('sm')]: rule({
      display: 'block',
    }),
  }),

  toggleMenuButton: rule({
    marginLeft: 'auto',

    [theme.breakpoints.up('sm')]: rule({
      display: 'none',
    }),
  }),

  mobileMenu: rule({
    display: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: theme.sizes.header.minHeightMobile,
    padding: '1.85rem 0 0 3.2rem',
    zIndex: theme.zIndex.afterContext(theme.zIndex.newContext),
    background: theme.colors.white,

    [theme.breakpoints.up('sm')]: rule({
      display: 'none !important',
    }),

    '&$isMenuOpen': rule({
      display: 'block',
    }),
  }),

  isMenuOpen: {},
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
