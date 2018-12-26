import injectSheet, { WithStyles, Theme } from 'react-jss';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  thumb: rule({
    width: '1.375rem',
    height: '1.375rem',
  }),
  trackAfter: rule({
    backgroundColor: theme.extra.colors.silver,
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
