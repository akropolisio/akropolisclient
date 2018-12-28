import injectSheet, { Theme, WithStyles } from 'react-jss';
import { rule } from 'shared/helpers/style';

import { IProps } from './Logo';

const styles = ({ extra: theme }: Theme) => ({

  root: rule({
    display: 'flex',
    flexDirection: (props: IProps) => props.viewType,
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: '1em',
  }),

  title: rule({
    fontSize: '0.45em',
    fontFamily: theme.typography.primaryFont,
    fontWeight: 'bold',
    color: theme.colors.heavyMetal,
    textTransform: 'uppercase',
    letterSpacing: '0.07em',

    [theme.breakpoints.between('sm', 'md')]: rule({
      display: 'none',
    }),
  }),

  logo: rule({
    fontSize: '1em',
    flexShrink: 0,
    marginRight: ({ viewType }: IProps) => viewType === 'row' ? '0.5em' : 0,
    marginBottom: ({ viewType }: IProps) => viewType === 'row' ? 0 : '0.65em',

    [theme.breakpoints.between('sm', 'md')]: rule({
      marginRight: () => '0',
    }),
  }),

});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
