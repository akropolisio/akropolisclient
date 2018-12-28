import * as React from 'react';
import * as ReactModal from 'react-modal';

import { Cross } from 'shared/view/elements/Icons';
import { IconButton } from 'shared/view/elements';

import { provideStyles, StylesProps } from './Modal.style';

interface IOwnProps {
  children?: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  isOpen: boolean;
  withCross?: boolean;
  onClose?: () => void;
}

type IProps = IOwnProps & StylesProps;

ReactModal.setAppElement('#root');

class Modal extends React.Component<IProps> {

  public render() {
    const { classes, children, isOpen, onClose, withCross } = this.props;
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
        {withCross && (
          <IconButton className={classes.cross} onClick={onClose}>
            <Cross />
          </IconButton>
        )}
        {children}
      </ReactModal>
    );
  }
}

export { IProps };
export default provideStyles(Modal);