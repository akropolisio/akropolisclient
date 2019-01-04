import injectSheet, { WithStyles, Theme } from 'react-jss';
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

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
