import injectSheet, { WithStyles } from 'react-jss';
import { rule } from 'shared/helpers/style';

const styles = {
  root: rule({
    boxShadow: 'unset',
    display: 'flex',
  }),
  selected: rule({

  }),
};

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
