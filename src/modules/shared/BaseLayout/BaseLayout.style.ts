import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  content: rule({
    maxWidth: theme.extra.sizes.page.maxWidth,
    padding: theme.spacing.unit * 3,
    paddingTop: `calc(${theme.spacing.unit}px + ${theme.extra.sizes.header.minHeightMobile})`,

    [theme.extra.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 3,
    },
    [theme.extra.breakpoints.up('md')]: {
      margin: '0 auto',
    },
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
