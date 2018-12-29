import injectSheet, { WithStyles, Theme } from 'react-jss';
import { IProps } from './Slider';

import { rule } from 'shared/helpers/style';

const thumbSize = 1.375;
const trachHeight = 0.1875;
const crutchMargin = thumbSize * 2;
const crutchPadding = crutchMargin + trachHeight;

const styles = (theme: Theme) => ({
  root: rule({
    margin: `-${crutchMargin}rem`,
    padding: `${crutchPadding}rem`,
    overflow: 'hidden',
  }),
  thumb: rule({
    width: `${thumbSize}rem`,
    height: `${thumbSize}rem`,
    '$disabled &': rule({
      width: `${thumbSize}rem`,
      height: `${thumbSize}rem`,
    }),
  }),
  disabled: rule({}),
  track: rule({
    height: `${trachHeight}rem`,
    width: '100%',
  }),
  trackAfter: rule({
    height: `${trachHeight}rem`,
    backgroundColor: theme.extra.colors.silver,
  }),
  runnerWrapper: rule({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: `${thumbSize}rem`,
    height: `${thumbSize}rem`,
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
