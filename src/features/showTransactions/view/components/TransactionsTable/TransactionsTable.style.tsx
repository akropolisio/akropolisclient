import { withStyles, Theme, WithStyles } from 'shared/styles';

import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
  }),

  cell: rule({
    padding: '1.875rem 0',

    '&:last-child': {
      paddingRight: '4.625rem',
    },
  }),

  header: rule({
    backgroundColor: 'transparent',
  }),

  row: rule({
    boxShadow: '0 1px 7px 0 rgba(184, 184, 184, 0.5)',
  }),

});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
