import { withStyles, Theme, WithStyles } from 'shared/styles';

import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  emptyFund: rule({
    width: '5.625rem',
    marginBottom: '1.25rem',

    [theme.breakpoints.up('sm')]: rule({
      width: '7.5rem',
    }),
  }),
  text: rule({
    fontFamily: theme.typography.primaryFont,
    color: theme.palette.text.primary,
  }),
  title: rule({
    composes: '$text',
    marginBottom: '1.125rem',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: rule({
      fontSize: '1.375rem',
    }),

    [theme.breakpoints.up('md')]: rule({
      fontSize: '1.5625rem',
    }),
  }),
  description: rule({
    composes: '$text',
    marginBottom: '1.625rem',
    textAlign: 'center',

    fontSize: '0.8125rem',
    [theme.breakpoints.up('sm')]: rule({
      fontSize: '0.875rem',
    }),
  }),
  findFundButton: rule({
    padding: '0 5rem',
    borderRadius: '1.25rem',
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
