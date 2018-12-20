import injectSheet, { WithStyles } from 'react-jss';
import { rule } from 'shared/helpers/style';

const styles = {
  root: rule({
    flexGrow: 1,
    minHeight: '100%',
  }),
  content: rule({
    flexGrow: 1,
  }),

  header: rule({
    height: '6.25rem',
  }),
};

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
