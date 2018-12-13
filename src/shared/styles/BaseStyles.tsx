import injectSheet from 'react-jss';
import { rule } from 'shared/helpers/style';
import './fonts/OpenSans/index.css';

const styles = {
  '@global': rule({
    html: {
      fontSize: 16, // TODO: use rems everywhere in the project
      fontFamily: 'Open Sans, sans-serif',
    },
    body: {
      margin: 0,
      fontSize: '1rem',
    },
    'html, body, #root': {
      height: '100%',
    },
  }),
};

export default injectSheet(styles)();
