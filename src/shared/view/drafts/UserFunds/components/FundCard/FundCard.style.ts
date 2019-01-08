import { withStyles, Theme, WithStyles } from 'shared/styles';

import { rule, hexToRGBA } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    minHeight: '100%',
    paddingTop: '1rem',
    backgroundColor: theme.colors.white,

    [theme.breakpoints.up('md')]: rule({
      display: 'flex',
      alignItems: 'center',
      padding: '1.3125rem 2.5rem',
    }),

  }),
  description: rule({
    display: 'flex',
    paddingBottom: '1.25rem',
    borderBottom: `solid 0.0625rem ${hexToRGBA(theme.colors.dustyGray, 0.21)}`,
    [theme.breakpoints.up('md')]: rule({
      border: 'none',
      padding: 0,
    }),
  }),
  acronym: rule({
    margin: '0.5rem 2.125rem 0 1.6875rem',
    fontSize: '2.75rem',
    fontFamily: theme.typography.primaryFont,
    fontWeight: 'bold',
    color: '#6931b6',
    textTransform: 'capitalize',

    [theme.breakpoints.up('sm')]: rule({
      marginTop: 0,
      fontSize: '4rem',
    }),

    [theme.breakpoints.up('md')]: rule({
      marginBottom: 0,
    }),
  }),

  text: rule({
    fontSize: '0.75rem',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.primaryFont,

    [theme.breakpoints.up('sm')]: rule({
      fontSize: '0.875rem',
    }),
  }),

  information: rule({}),
  title: rule({
    composes: '$text',
    marginBottom: '0.5625rem',
    fontSize: '1rem',
    fontWeight: 600,

    [theme.breakpoints.up('sm')]: rule({
      marginBottom: '0.875rem',
      fontSize: '1.25rem',
    }),
  }),

  type: rule({
    composes: '$text',
    marginBottom: '0.75rem',
    [theme.breakpoints.up('sm')]: rule({
      marginRight: '0.625rem',
    }),
  }),

  policy: rule({
    composes: '$text',
    opacity: 0.58,
    marginBottom: '0.75rem',
  }),

  pensionDate: rule({
    composes: '$text',
    opacity: 0.58,
  }),

  pensionInformationFields: rule({
    [theme.breakpoints.up('sm')]: rule({
      display: 'flex',
    }),
  }),

  metrics: rule({
    [theme.breakpoints.up('sm')]: rule({
      display: 'flex',
      alignItems: 'center',
      padding: '1.875rem 2.5rem 1.875rem 1rem',
    }),

    [theme.breakpoints.up('md')]: rule({
      padding: 0,
      marginLeft: 'auto',
    }),
  }),

  metric: rule({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.25rem 1.5625rem 1.25rem 1rem',
    borderBottom: `solid 0.0625rem ${hexToRGBA(theme.colors.dustyGray, 0.21)}`,

    [theme.breakpoints.up('sm')]: rule({
      flexDirection: 'column',
      justifyContent: 'center',
      border: 'none',
      padding: '0 1.875rem',

      '&:first-child': rule({
        borderRight: `solid 0.0625rem ${hexToRGBA(theme.colors.dustyGray, 0.21)}`,
      }),
    }),

    [theme.breakpoints.up('md')]: rule({
      alignSelf: 'flex-start',
      marginTop: '1.25rem',
    }),
  }),

  metricName: rule({
    composes: '$text',
    color: theme.colors.dustyGray,
    [theme.breakpoints.up('sm')]: rule({
      marginBottom: '0.625rem',
    }),
  }),

  metricValue: rule({
    composes: '$text',
    fontSize: '1.3125rem',
    fontWeight: 'bold',
  }),

  deposit: rule({
    padding: '1rem 1.375rem 1.375rem',

    [theme.breakpoints.up('sm')]: rule({
      marginLeft: 'auto',
      padding: 0,
    }),
    [theme.breakpoints.up('md')]: rule({
      padding: '2.5rem 0 2.5rem 2.25rem',
      borderLeft: `solid 0.0625rem ${hexToRGBA(theme.colors.dustyGray, 0.21)}`,
    }),
  }),
  depositButton: rule({
    fontSize: '0.875rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    [theme.breakpoints.up('sm')]: rule({
      marginLeft: 'auto',
      padding: '0 2.25rem',
    }),
  }),

});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
