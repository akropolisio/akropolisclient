import { withStyles, Theme, WithStyles } from 'shared/styles';

import { rule, hexToRGBA } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
  }),

  header: rule({
    display: 'flex',
    minHeight: '8.75rem',
    borderBottom: `solid 0.0625rem ${hexToRGBA(theme.colors.dustyGray, 0.21)}`,
    alignItems: 'center',
    justifyContent: 'center',
  }),

  content: rule({
    padding: '1.625rem 1.625rem 1.25rem',
  }),

  actions: rule({
    padding: '0 1.625rem 1.375rem',
    marginTop: 'auto',
    fontSize: '0.875rem',
    fontWeight: 'bold',
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
