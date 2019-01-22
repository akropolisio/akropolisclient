import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';
import { toFixed } from 'shared/helpers/integer';

const percentForMargin = 3;

const cardMargin = toFixed(percentForMargin / 2, 1);

const fundCardStyles = (itemAtRow: number) => {
  const width = 100 / itemAtRow - percentForMargin;

  return {
    width: `${width}%`,
  };
};

const styles = ({ extra: theme }: Theme) => ({
  root: rule({}),
  header: rule({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1.6875rem',
  }),
  title: rule({
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: theme.typography.primaryFont,
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  }),

  content: rule({
    display: 'flex',
    flexDirection: 'column',
    margin: `0 ${-cardMargin}%`,

    [theme.breakpoints.up('sm')]: rule({
      flexDirection: 'row',
      flexWrap: 'wrap',
    }),
  }),
  search: rule({
    marginRight: '1rem',
    fontSize: '1.125rem',
    color: theme.colors.black,
  }),

  fundCard: rule({
    flexGrow: 1,
    boxShadow: `0 0.0625rem 0.4375rem 0 rgba(184, 184, 184, 0.5)`,
    margin: `0 ${cardMargin}%`,
    marginBottom: '1.375rem',

    [theme.breakpoints.up('sm')]: rule({
      flexGrow: 0,
    }),

    [theme.breakpoints.between('sm', 'md')]: rule({
      ...fundCardStyles(2),
    }),

    [theme.breakpoints.up('md')]: rule({
      ...fundCardStyles(3),
    }),
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
