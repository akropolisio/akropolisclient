import injectSheet, { Theme } from 'react-jss';
import { rule } from 'shared/helpers/style';
import './fonts/OpenSans/index.scss';

const styles = ({ extra: theme }: Theme) => ({
  '@global': rule({
    html: {
      boxSizing: 'border-box',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontSize: 16, // TODO: use rems everywhere in the project
      fontFamily: 'OpenSans, sans-serif',
    },
    body: {
      margin: 0,
      fontSize: '1rem',
      backgroundColor: theme.colors.alabaster,
    },
    'html, body, #root': {
      height: '100%',
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit',
    },
    '@media print': {
      body: {
        backgroundColor: '#fff',
      },
    },

  }),
});

export default injectSheet(styles)();
