import { withStyles, WithStyles, Theme } from 'shared/styles';
import { rule } from 'shared/helpers/style';
import { IProps } from './Menu';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: (props: IProps) => props.viewType,
  }),

  link: rule({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.primaryFont,
    tapHighlightColor: 'rgba(0,0,0,0)',
    borderRadius: 0,

    '&$isActive': rule({
      fontWeight: 'bold',
      letterSpacing: '-0.03rem',
    }),

    '&$isRowType': rule({
      marginRight: '2.125rem',
      padding: theme.spacing.unit,
      borderBottom: `solid transparent 2px`,

      '&:last-child': rule({
        marginRight: 0,
      }),

      '&$isActive': rule({
        borderColor: theme.palette.control.border.focus,
      }),
    }),

    '&$isColumnType': rule({
      justifyContent: 'flex-start',
      minHeight: theme.sizes.control.minHeight,
      padding: theme.spacing.unit,
      paddingLeft: 0,
      borderBottom: `solid ${theme.colors.mercury} 1px`,

      '&:first-child': rule({
        borderTop: `solid ${theme.colors.mercury} 1px`,
      }),
    }),

  }),

  isActive: {},
  isRowType: {},
  isColumnType: {},
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
