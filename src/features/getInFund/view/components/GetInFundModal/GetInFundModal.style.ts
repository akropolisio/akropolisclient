import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    display: 'flex',
    padding: `${theme.spacing.unit * 4}px`,
  }),
  form: rule({
    width: 0,
    flexGrow: 5,
  }),
  fund: rule({
    display: 'none',
    width: 0,
    flexGrow: 3,
    marginLeft: `${theme.spacing.unit * 4}px`,

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }),
  logo: rule({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: `${theme.spacing.unit * 4}px`,
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
