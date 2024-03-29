import * as React from 'react';
import * as ReactModal from 'react-modal';
import * as cn from 'classnames';

import { Cross } from 'shared/view/elements/Icons';
import { IconButton } from 'shared/view/elements';

import { provideStyles, StylesProps } from './Modal.style';

interface IOwnProps {
  children?: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  type?: 'default' | 'signTransaction';
  isOpen: boolean;
  title?: string;
  withCross?: boolean;
  onClose?: () => void;
}

type IProps = IOwnProps & StylesProps;

ReactModal.setAppElement('#root');

class Modal extends React.Component<IProps> {
  public render() {
    const { classes, children, isOpen, onClose, withCross, title } = this.props;

    return (
      <ReactModal
        className={classes.modal && {
          base: classes.modal,
          afterOpen: classes.modalAfterOpen,
          beforeClose: classes.modalBeforeClose,
        }}
        overlayClassName={classes.overlay && {
          base: classes.overlay,
          afterOpen: classes.overlayAfterOpen,
          beforeClose: classes.overlayBeforeClose,
        }}
        isOpen={isOpen}
        onRequestClose={onClose}
        closeTimeoutMS={400}
      >
        {!!title && (
          <div className={classes.title}>
            {withCross && <CrossButton isHidden classes={classes} />}
            {title}
            {withCross && <CrossButton classes={classes} onClick={onClose} />}
          </div>
        )}
        {!title && withCross && <CrossButton isAbsolute classes={classes} onClick={onClose} />}
        {children}
      </ReactModal>
    );
  }
}

interface ICrossButtonProps {
  isAbsolute?: boolean;
  isHidden?: boolean;
  onClick?(): void;
}

function CrossButton({ isAbsolute, isHidden, classes, onClick }: ICrossButtonProps & StylesProps) {
  return (
    <div
      className={cn(classes.cross, {
        [classes.isAbsolute]: isAbsolute,
        [classes.isHidden]: isHidden,
      })}
    >
      <IconButton onClick={onClick} ><Cross /></IconButton>
    </div>
  );
}

export { IProps };
export default provideStyles(Modal);
