import injectSheet, { WithStyles, Theme } from 'react-jss';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    overflow: 'auto',
    backgroundColor: theme.colors.white,

  }),

  title: rule({
    fontSize: '1.125rem',
    fontFamily: theme.typography.primaryFont,
    fontWeight: 'bold',
    marginBottom: '1.75rem',
  }),

  sectionsMenu: rule({
    display: 'flex',
    alignItems: 'stretch',
  }),

  sectionLink: rule({
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    textDecoration: 'none',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.primaryFont,
    tapHighlightColor: 'rgba(0,0,0,0)',
    borderRadius: 0,
    fontSize: '0.875rem',
    padding: theme.spacing.unit,
    borderBottom: `solid transparent 0.125rem`,

    '&$isActive': rule({
      borderColor: theme.palette.control.border.focus,
    }),
  }),

  isActive: {},

});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
