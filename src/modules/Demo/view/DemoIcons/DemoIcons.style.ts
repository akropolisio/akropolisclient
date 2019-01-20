import { withStyles, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = {
  root: rule({
    width: 1000,
    padding: 50,
    display: 'flex',
    flexWrap: 'wrap',
  }),
  icon: rule({
    width: '33%',
    padding: 5,
    display: 'flex',
    alignItems: 'center',
  }),
  iconName: rule({
    marginLeft: 10,
  }),
};

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
