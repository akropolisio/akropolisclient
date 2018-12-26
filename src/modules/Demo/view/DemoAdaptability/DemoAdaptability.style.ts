import injectSheet, { WithStyles } from 'react-jss';
import { rule } from 'shared/helpers/style';

const styles = {
  inline: rule({
    display: 'inline',
  }),
};

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
