import injectSheet, { WithStyles, Theme } from 'react-jss';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    padding: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 5}px`,
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
