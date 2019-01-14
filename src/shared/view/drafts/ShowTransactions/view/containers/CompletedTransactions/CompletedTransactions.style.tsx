import { withStyles, WithStyles } from 'shared/styles';

const styles = () => ({
  root: {},

});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
