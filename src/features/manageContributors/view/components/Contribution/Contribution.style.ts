import { withStyles, Theme, WithStyles } from 'shared/styles';

import { rule, hexToRGBA } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.25rem 1.75rem',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontFamily: theme.typography.primaryFont,
    color: theme.palette.text.primary,

    '&:hover': rule({
      backgroundColor: hexToRGBA(theme.colors.purpleHeart, 0.07),

      '$removeIcon': rule({
        display: 'block',
      }),
    }),
  }),

  title: rule({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),

  removeIcon: rule({
    visibility: 'hidden',
    fontSize: '1.125rem',
    color: theme.colors.gray,

    '$root:hover &': {
      visibility: 'unset',
    },
  }),

});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
