import { withStyles, WithStyles, Theme } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: {},
  field: rule({
    marginBottom: theme.spacing.unit * 3,
  }),
  submit: rule({
    marginTop: theme.spacing.unit * 2,
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
