import injectSheet, { Theme, WithStyles } from 'react-jss';

import { rule, styledBy } from 'shared/helpers/style';

import { IProps } from './Modal';

const styles = ({ extra: theme }: Theme) => ({
  '@global': rule({
    '.ReactModalPortal': {
      overflow: 'auto',
      position: 'fixed',
      top: -1,
      right: -1,
      bottom: -1,
      left: -1,
      zIndex: theme.zIndex.modal,

      '&:empty': {
        display: 'none',
      },
    },
  }),
  overlay: rule({
    minHeight: '100%',
    minWidth: '100%',
    padding: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.palette.control.bg.overlay,
  }),
  modal: rule({
    flexGrow: 1,
    minHeight: '100%',
    minWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
    outline: 'none',
    opacity: 0,

    [theme.breakpoints.up('sm')]: rule({
      flexGrow: 0,
      minHeight: 'unset',
      minWidth: 'unset',
      width: styledBy<IProps, 'size'>('size', {
        small: '21.875rem',
        medium: '30rem',
        large: '40.625rem',
      }),
      margin: '3rem',
      borderRadius: '0.5rem',
    }),
  }),

  modalAfterOpen: rule({
    animationName: 'modal-appear-animation',
    animationDuration: '500ms',
    animationFillMode: 'forwards',
  }),
  overlayAfterOpen: rule({
    animationName: 'overlay-appear-animation',
    animationDuration: '500ms',
    animationFillMode: 'forwards',
  }),
  modalBeforeClose: rule({
    animationName: 'modal-disappear-animation',
    animationDuration: '400ms',
    animationFillMode: 'forwards',
  }),
  overlayBeforeClose: rule({
    animationName: 'overlay-disappear-animation',
    animationDuration: '400ms',
    animationFillMode: 'forwards',
  }),

  cross: rule({
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    zIndex: theme.zIndex.newContext + 1,

    [theme.breakpoints.up('sm')]: rule({
      top: '3rem',
      right: '3rem',
    }),
  }),

  '@keyframes modal-disappear-animation': rule({
    from: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    to: {
      opacity: 0,
      transform: 'translateY(50%)',
    },
  }),

  '@keyframes modal-appear-animation': rule({
    from: {
      opacity: 0,
      transform: 'translateY(25%)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  }),

  '@keyframes overlay-appear-animation': rule({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  }),

  '@keyframes overlay-disappear-animation': rule({
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  }),
});

export const provideStyles = injectSheet(styles);

export type StylesProps = WithStyles<typeof styles>;
