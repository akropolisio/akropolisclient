import { withStyles, WithStyles, Theme } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    backgroundColor: theme.colors.white,
  }),

  content: {},

  title: rule({
    fontSize: '1.125rem',
    fontFamily: theme.typography.primaryFont,
    fontWeight: 'bold',
    marginBottom: '1.75rem',
  }),

  sectionLink: rule({
    flexGrow: 1,
  }),

});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;