import injectSheet, { Theme, WithStyles } from 'react-jss';

import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({

  root: rule({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3.125rem 7.5rem 5.625rem',

    ...theme.respondTo('sm', {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    }),
  }),

  title: rule({
    marginBottom: '0.9375rem',
    fontSize: '1.5rem',
    fontFamily: theme.typography.primaryFont,
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    textAlign: 'center',

    ...theme.respondTo('sm', {
      padding: '0 3rem',
    }),
  }),

  description: rule({
    fontSize: '0.9375rem',
    fontFamily: theme.typography.primaryFont,
    color: theme.palette.text.primary,
    textAlign: 'center',

    ...theme.respondTo('sm', {
      padding: '0 3rem',
    }),
  }),

  scanQrCode: rule({
    position: 'relative',
    width: '100%',
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
    justifyContent: 'space-between',
    padding: '0 3.125rem',
  }),

  link: rule({
    flexGrow: 1,
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
