import injectSheet, { Theme, WithStyles } from 'react-jss';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({}),
  title: rule({
    fontSize: '1.125rem',
    fontFamily: theme.typography.primaryFont,
    fontWeight: 'bold',
    marginBottom: '1.75rem',
  }),

  content: rule({
    display: 'flex',
    flexDirection: 'column',
  }),

  fundCard: rule({
    flexGrow: 1,
    boxShadow: `0 0.0625rem 0.4375rem 0 rgba(184, 184, 184, 0.5)`,
    marginBottom: '1.375rem',
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
