import injectSheet, { Theme } from 'react-jss';
import { rule } from 'shared/helpers/style';
import './fonts/OpenSans/index.scss';

const styles = ({ extra: theme }: Theme) => ({
  '@global': rule({
    html: {
      fontSize: 16, // TODO: use rems everywhere in the project
      fontFamily: 'OpenSans, sans-serif',
    },
    body: {
      margin: 0,
      fontSize: '1rem',
    },
    'html, body, #root': {
      height: '100%',
    },
  }),

  [theme.breakpoints.down('sm')]: {
    '@global html': {
      fontSize: 13,
    },
  },
});

export default injectSheet(styles)();
