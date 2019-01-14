import { withStyles, Theme, WithStyles } from 'shared/styles';

import { rule, hexToRGBA } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.125rem',
    backgroundColor: theme.colors.white,
    boxShadow: '0 0.0625rem 0.4375rem 0 rgba(184, 184, 184, 0.5)',

    [theme.breakpoints.up('sm')]: rule({
      flexDirection: 'row',
    }),
  }),

  text: rule({
    fontFamily: theme.typography.primaryFont,
    color: theme.palette.text.primary,
  }),

  header: rule({
    composes: '$text',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '1.125rem',
    borderBottom: `solid ${hexToRGBA(theme.colors.dustyGray, 0.33)} 1px`,

    [theme.breakpoints.up('sm')]: rule({
      display: 'none',
    }),
  }),

  index: rule({
    marginRight: '1.0625rem',
    fontSize: '0.8125rem',

    [theme.breakpoints.up('sm')]: {
      fontSize: '0.9375rem',
    },
  }),

  date: rule({
    fontSize: '0.8125rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),

  amount: rule({
    marginLeft: 'auto',
    fontSize: '1.25rem',
    fontWeight: 'bold',
  }),

  type: rule({
    composes: '$text',
    fontSize: '0.9375rem',
    marginBottom: '1.0625rem',
  }),

  rightColumn: rule({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginLeft: 'auto',
    marginRight: '1.625rem',
  }),

  metrics: rule({
    paddingTop: '0.9375rem',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 0,
    },
  }),
  metric: rule({
    composes: '$text',
    fontSize: '0.75rem',
    marginBottom: '0.9375rem',

    [theme.breakpoints.up('sm')]: {
      fontSize: '0.9375rem',
    },
  }),
  metricLabel: rule({
    composes: '$metric',
    color: hexToRGBA(theme.palette.text.primary, 0.33),
  }),
  metricValue: rule({
    composes: '$metric',
  }),
  metricsLabels: rule({
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.up('sm')]: {
      marginRight: '3.75rem',
    },
  }),
  metricsValues: rule({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-start',
    },
  }),

});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
