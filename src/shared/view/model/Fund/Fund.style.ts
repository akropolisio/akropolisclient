import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    display: 'flex',
    flexDirection: 'column',
  }),

  text: rule({
    fontSize: '0.875rem',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.primaryFont,
  }),

  title: rule({
    composes: '$text',
    marginBottom: '0.6875rem',
    fontSize: '1.125rem',
    fontWeight: 600,
  }),

  commission: rule({
    composes: '$text',
    marginBottom: '0.3125rem',
  }),

  policy: rule({
    composes: '$text',
    opacity: 0.58,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
