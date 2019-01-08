import { withStyles, WithStyles, Theme } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  roleButton: {},

  rightIcon: rule({
    marginLeft: theme.spacing.unit * 1.5,
    fontSize: '1.1rem',
    color: theme.extra.colors.silver,

    '$isSelected &, $roleButton:hover &': {
      color: 'inherit',
    },

    '&$inMenu': {
      marginLeft: 'auto',
    },
  }),

  overrideInput: {
    paddingTop: 10.5,
    paddingBottom: 10.5,
  },

  inMenu: {},
  isSelected: {},
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
