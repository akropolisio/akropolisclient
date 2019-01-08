import { withStyles, Theme, WithStyles } from 'shared/styles';

import { rule, hexToRGBA } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({}),
  title: rule({
    fontSize: '1.125rem',
    fontFamily: theme.typography.primaryFont,
    fontWeight: 'bold',
    marginBottom: '1.75rem',
  }),

  metrics: rule({
    display: 'flex',
    flexDirection: 'column',
    padding: '0.3rem 1.125rem',
    boxShadow: '0 0.0625rem 0.4375rem 0 rgba(184, 184, 184, 0.5)',
    backgroundColor: theme.colors.white,

    [theme.breakpoints.up('sm')]: rule({
      flexDirection: 'row',
      padding: '2.25rem 0.5rem 1.625rem',
    }),

    [theme.breakpoints.up('md')]: rule({
      padding: '3rem 0 1.875rem',
    }),
  }),

  metric: rule({
    position: 'relative',
    minHeight: '7.5rem',
    flexGrow: 1,
    padding: '0.9rem 0.625rem',
    borderBottom: `solid 1px ${hexToRGBA(theme.colors.dustyGray, 0.2)}`,

    [theme.breakpoints.up('sm')]: rule({
      padding: '0.5rem 1.5rem',
      minHeight: 'unset',
      border: 'none',
    }),

    '&:after': rule({
      content: '""',
      display: 'none',
      position: 'absolute',
      right: 0,
      top: 0,
      minHeight: '4rem',
      width: '0.0625rem',
      backgroundColor: theme.colors.dustyGray,

      [theme.breakpoints.up('sm')]: rule({
        display: 'block',
      }),

      [theme.breakpoints.up('md')]: rule({
        minHeight: '100%',
      }),
    }),

    '&:last-child': rule({
      border: 'none',
      '&:after': rule({
        display: 'none',
      }),
    }),

  }),

});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
