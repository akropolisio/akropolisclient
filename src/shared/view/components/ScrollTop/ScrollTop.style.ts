import { withStyles, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = () => ({

  root: rule({
    position: 'fixed',
    left: '1.875rem',
    bottom: '1.875rem',
  }),

  arrow: rule({
    transform: 'rotate(-90deg)',
    fontSize: '30px',
  }),

  isHidden: rule({
    display: 'none',
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
