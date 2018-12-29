import injectSheet, { Theme, WithStyles } from 'react-jss';

import { rule, styledBy } from 'shared/helpers/style';

import { IProps } from './Metric';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    minHeight: '100%',
    display: 'flex',
  }),

  percent: rule({
    display: 'flex',
    padding: '0.5rem 0',
    marginRight: '1.275rem',

    [theme.breakpoints.between('sm', 'md')]: rule({
      padding: 0,
    }),
  }),

  piechart: rule({}),

  content: rule({}),

  text: rule({
    fontFamily: theme.typography.primaryFont,
    color: theme.palette.text.primary,
    fontSize: '0.75rem',

  }),

  name: rule({
    composes: '$text',
    display: 'flex',
    marginBottom: '0.625rem',
    minHeight: '1.125rem',
  }),

  hintIcon: rule({
    marginLeft: '0.5rem',
    fontSize: '1rem',
    color: theme.colors.gray,
  }),

  value: rule({
    composes: '$text',
    fontWeight: 'bold',
    fontSize: '1.625rem',
    marginBottom: '0.475rem',

    [theme.breakpoints.up('md')]: rule({
      fontSize: '2.125rem',
    }),
  }),

  variation: rule({
    composes: '$text',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '0.9375rem',
    color: ({ metric: { variation } }: IProps) => variation && variation < 0 ?
      theme.palette.text.warning : theme.palette.text.positive,

    [theme.breakpoints.up('md')]: rule({
      fontSize: '1.25rem',
    }),
  }),

  arrowIcon: rule({
    transform: ({ metric: { variation } }: IProps) => variation && variation < 0 ? 'unset' : 'rotate(180deg)',
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
