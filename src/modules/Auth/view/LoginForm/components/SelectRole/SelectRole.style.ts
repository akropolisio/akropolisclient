import injectSheet, { WithStyles, Theme } from 'react-jss';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({

  roleButton: rule({
    '&:hover $rightIcon': {
      color: 'inherit',
    },
  }),

  roleButtonSelected: rule({
    composes: '$roleButton',
    '& $rightIcon': {
      color: 'inherit',
    },
  }),

  rightIcon: rule({
    marginLeft: theme.spacing.unit * 1.5,
    fontSize: '1rem',
    color: theme.extra.colors.silver,
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
