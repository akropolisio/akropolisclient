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
  }),
  acronym: rule({
    margin: 'auto',
    fontSize: '4rem',
    fontFamily: theme.typography.primaryFont,
    fontWeight: 'bold',
    color: '#6931b6',
    textTransform: 'capitalize',
  }),

  text: rule({
    fontSize: '0.875rem',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.primaryFont,
  }),

  title: rule({
    composes: '$text',
    marginBottom: '0.6875rem',
    fontSize: '1.125rem',
    fontWeight: 600,
  }),

  commission: rule({
    composes: '$text',
    marginBottom: '0.3125rem',
  }),

  policy: rule({
    composes: '$text',
    opacity: 0.58,
    marginBottom: '1.25rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),

  content: rule({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: '1.625rem 1.625rem 1.375rem',
  }),
  search: rule({
    fontSize: '1.125rem',
  }),

  selectFundButton: rule({
    marginTop: 'auto',
    fontSize: '0.875rem',
    fontWeight: 'bold',
  }),

});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
