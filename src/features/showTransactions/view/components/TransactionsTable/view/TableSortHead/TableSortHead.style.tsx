import { withStyles, Theme, WithStyles } from 'shared/styles';

import { rule, hexToRGBA, styledBy } from 'shared/helpers/style';

import { IProps } from './TableSortHead';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    cursor: 'pointer',
    justifyContent: styledBy<IProps, 'align'>('align', {
      left: 'flex-start',
      center: 'center',
      right: 'flex-end',
    }, 'left'),
    color: hexToRGBA(theme.palette.text.primary, 0.55),

    '&$active': {
      color: theme.palette.text.positive,
    },
  }),

  label: rule({
    marginRight: '10px',
  }),

  sortIcon: rule({
    fontSize: '0.875rem',
    visibility: ({ order }: IProps) => order ? 'unset' : 'hidden',

    '&$desc': {
      transform: 'rotate(-90deg)',
      // marginRight: '0.375rem',
    },

    '&$asc': {
      transform: 'rotate(90deg)',
    },
  }),

  desc: {},
  asc: {},
  active: {},
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
