import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    fontSize: '4rem',
    fontFamily: theme.typography.primaryFont,
    fontWeight: 'bold',
    color: '#6931b6',
    textTransform: 'capitalize',
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
