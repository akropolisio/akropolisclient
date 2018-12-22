import injectSheet, { Theme, WithStyles } from 'react-jss';

import { rule } from 'shared/helpers/style';
import matchProp from 'shared/helpers/matchProp';

import { IProps } from './Modal';

const styles = ({ extra: theme }: Theme) => ({
  modal: rule({
    backgroundColor: theme.colors.white,
    outline: 'none',
    opacity: 0,
    borderRadius: '8px',
    width: ({ size }: IProps) => matchProp(size)({
      small: '21.875rem',
      medium: '30rem',
      large: '40.625rem',
    }),
    ...theme.respondTo('sm', {
      width: () => '100%',
      height: () => '100%',
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
  overlay: rule({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.control.bg.overlay,
    zIndex: theme.zIndex.modal,
  }),

  cross: rule({
    width: '1.25rem',
    height: '1.25rem',
    position: 'absolute',
    top: '3.125rem',
    right: '3.125rem',
    cursor: 'pointer',
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
