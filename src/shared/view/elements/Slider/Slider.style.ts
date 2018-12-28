import injectSheet, { WithStyles, Theme } from 'react-jss';
import { IProps } from './Slider';

import { rule } from 'shared/helpers/style';

const thumbSize = '1.375rem';
const trachHeight = '0.1875rem';
const styles = (theme: Theme) => ({

  thumb: rule({
    width: thumbSize,
    height: thumbSize,
    '$disabled &': rule({
      width: thumbSize,
      height: thumbSize,
    }),
  }),
  disabled: rule({}),
  track: rule({
    height: trachHeight,
    width: '100%',
  }),
  trackAfter: rule({
    height: trachHeight,
    backgroundColor: theme.extra.colors.silver,
  }),
  runnerWrapper: rule({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: thumbSize,
    height: thumbSize,
    backgroundColor: (props: IProps) => props.disabled ? theme.extra.colors.alto : theme.extra.colors.silver,
  }),
  runner: rule({
    margin: '0, auto',
    borderRadius: 50,
    width: '0.75rem',
    height: '0.75rem',
    backgroundColor: (props: IProps) => props.disabled ? theme.extra.colors.silverChalice : theme.palette.primary.main,
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
