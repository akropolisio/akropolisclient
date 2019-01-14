import { withStyles, WithStyles } from 'shared/styles';

import { rule } from 'shared/helpers/style';

const styles = () => ({
  root: rule({
    display: 'flex',
    flexDirection: 'column',
  }),

  transaction: rule({
    marginBottom: '1.125rem',
  }),

});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
