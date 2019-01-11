import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    display: 'flex',
    padding: `${theme.spacing.unit * 4}px`,
  }),
  form: rule({
    flexGrow: 3,
  }),
  fond: rule({
    display: 'none',
    flexGrow: 1,

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
