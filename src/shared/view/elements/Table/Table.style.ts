import { withStyles as muiWithStyles } from '@material-ui/core/styles';
import { withStyles, WithStyles, Theme } from 'shared/styles';
import { rule, hexToRGBA } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({

  root: rule({
    width: '100%',
    borderSpacing: '0 1rem',
    borderCollapse: 'separate',
  }),

  row: rule({
    background: theme.colors.white,
    boxShadow: '0 1px 7px 0 rgba(184, 184, 184, 0.5)',
  }),

  text: rule({
    fontWeight: 'normal',
    fontSize: '14px',
    fontFamily: theme.typography.primaryFont,
    color: theme.palette.text.primary,
  }),

  headCell: rule({
    composes: '$text',
    // color: hexToRGBA(theme.palette.text.primary, 0.55),

    '&:first-child': {
      paddingLeft: '50px',
    },
    '&:last-child': {
      paddingRight: '50px',
    },
  }),

  cell: rule({
    composes: '$text',
    fontSize: '15px',
    padding: '30px 0',

    '&:first-child': {
      paddingLeft: '50px',
    },
    '&:last-child': {
      paddingRight: '50px',
    },
  }),
});

// TODO ds: rewrite after transition to @material-ui/styles
export const provideStyles = (muiWithStyles as typeof withStyles)(styles);

export type StylesProps = WithStyles<typeof styles>;
