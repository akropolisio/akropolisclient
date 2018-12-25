import injectSheet, { WithStyles, Theme } from 'react-jss';
import { rule } from 'shared/helpers/style';
import * as backgroundFon from './images/background.png';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundImage: `url(${backgroundFon})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.colors.white,
  }),

  content: rule({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.colors.white,
    boxShadow: '0 0.0625rem 0.75rem 0 rgba(0, 0, 0, 0.5)',
    padding: '1.875rem 1.25rem 4.75rem',

    [theme.breakpoints.up('sm')]: rule({
      width: '51.25rem',
      maxWidth: '51.25rem',
      minHeight: '43.75rem',
      margin: 'auto',
      padding: '3.5rem 5.125rem 6.5rem',
    }),
  }),

  mobileLogo: rule({
    marginBottom: '1.75rem',
    fontSize: '2.5rem',
  }),

  desktopLogo: rule({
    marginBottom: '3.125rem',
    fontSize: '3.125rem',
  }),

  text: rule({
    textTransform: 'uppercase',
    fontFamily: theme.typography.primaryFont,
    fontSize: '0.6875rem',
    textAlign: 'center',
    fontWeight: 600,
    [theme.breakpoints.up('sm')]: rule({
      fontWeight: 'normal',
    }),
  }),

  subTitle: rule({
    composes: '$text',
    marginBottom: '1.625rem',

    [theme.breakpoints.up('sm')]: rule({
      marginBottom: '3.125rem',
    }),
  }),

  title: rule({
    composes: '$text',
    marginBottom: '1.4375rem',
    fontSize: '1.5625rem',
    fontWeight: 'bold',

    [theme.breakpoints.up('sm')]: rule({
      marginBottom: '1.625rem',
      fontSize: '2.5rem',
    }),

  }),

  selectRole: rule({
    composes: '$text',
    marginBottom: '2.25rem',
  }),

  roles: rule({
    marginBottom: '3.125rem',
    alignSelf: 'stretch',

    [theme.breakpoints.up('sm')]: rule({
      alignSelf: 'unset',
    }),
  }),

  signButtons: rule({
    alignSelf: 'stretch',

    [theme.breakpoints.up('sm')]: rule({
      padding: '0 11rem',
    }),
  }),

  signInButton: rule({
    marginBottom: '0.625rem',
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
