import injectSheet, { Theme, WithStyles } from 'react-jss';

import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({

  root: rule({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem 2.5rem',

    [theme.breakpoints.up('sm')]: rule({
      padding: '3.625rem 1rem 4.625rem',
    }),
  }),

  title: rule({
    marginBottom: '0.9375rem',
    fontSize: '1.25rem',
    fontFamily: theme.typography.primaryFont,
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    textAlign: 'center',

    [theme.breakpoints.up('sm')]: rule({
      fontSize: '1.5rem',
    }),
  }),

  description: rule({
    fontSize: '0.875rem',
    fontFamily: theme.typography.primaryFont,
    color: theme.palette.text.primary,
    textAlign: 'center',
    padding: '0 1rem',

    [theme.breakpoints.up('sm')]: rule({
      padding: '0 11rem',
      fontSize: '0.9375rem',
    }),
  }),

  scanQrCode: rule({
    position: 'relative',
    width: '80%',
    marginBottom: '2.5rem',
  }),

  phone: rule({
    width: '100%',
  }),

  qrCode: rule({
    position: 'absolute',
    top: '42%',
    left: '50%',
    width: '30%',
    transform: 'translateX(-50%)',
  }),

  qrCodeImage: rule({
    position: 'absolute',
    top: '30%',
    left: 0,
    right: 0,
    width: '44%',
  }),

  linksToMarket: rule({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '0 3.125rem',
  }),

  link: rule({
    flexGrow: 1,
    maxWidth: '10rem',

    '&:first-child': {
      marginRight: '0.3125rem',
    },
    '&:last-child': {
      marginLeft: '0.3125rem',
    },
  }),

  image: rule({
    width: '100%',
  }),

});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
