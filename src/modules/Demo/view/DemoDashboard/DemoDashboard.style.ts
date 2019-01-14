import { withStyles, WithStyles, Theme } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    marginLeft: theme.spacing.unit * 1.5,
  }),
  dashboard: rule({
    marginBottom: '3rem',
  }),
  header: rule({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.6875rem',
  }),
  title: rule({
    fontSize: '1.125rem',
    fontFamily: theme.typography.primaryFont,
    fontWeight: 'bold',
  }),
  transactionsButton: rule({
    borderRadius: '20px',
    padding: '0 25px',
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
