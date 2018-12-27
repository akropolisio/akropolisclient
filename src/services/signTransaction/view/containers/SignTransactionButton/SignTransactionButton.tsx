import * as React from 'react';
import { connect } from 'react-redux';
import { GetProps } from '_helpers';

import { IAppReduxState } from 'shared/types/app';
import { TransactionType, ABIRequestDataByType, ITransaction } from 'shared/types/models';
import { ICommunication } from 'shared/types/redux';
import { Button } from 'shared/view/elements';

import * as actions from '../../../redux/actions';
import * as selectors from '../../../redux/selectors';
import { bind } from 'decko';

interface IOwnProps<T extends TransactionType> {
  transactionType: T;
  data: ABIRequestDataByType[T];
  onSuccess?(transaction: ITransaction): void;
  onCancel?(): void;
}

interface IStateProps {
  abiGenerating: ICommunication;
  isOpenedModal: boolean;
  signedTransaction: ITransaction | null;
}

type IActionProps = typeof mapDispatch;

type IButtonProps = GetProps<typeof Button>;

type IProps<T extends TransactionType> = IOwnProps<T> & IStateProps & IActionProps & IButtonProps;

interface IState {
  status: 'initial' | 'signing';
}

function mapState(state: IAppReduxState): IStateProps {
  return {
    abiGenerating: selectors.selectCommunication(state, 'abiGeneration'),
    isOpenedModal: selectors.selectIsOpenedModal(state),
    signedTransaction: selectors.selectSignedTransaction(state),
  };
}

const mapDispatch = {
  signTransaction: actions.signTransaction,
};

class SignTransactionButton<T extends TransactionType> extends React.Component<IProps<T>, IState> {
  public state: IState = { status: 'initial' };

  public componentDidUpdate(prevProps: IProps<T>) {
    const { signedTransaction, onSuccess, onCancel: onClose, isOpenedModal } = this.props;
    if (this.state.status === 'signing' && !prevProps.signedTransaction && signedTransaction) {
      onSuccess && onSuccess(signedTransaction);
    }
    if (this.state.status === 'signing' && prevProps.isOpenedModal && !isOpenedModal) {
      this.setState({ status: 'initial' });
      onClose && !signedTransaction && onClose();
    }
  }
  public render() {
    const {
      data, transactionType, onSuccess, onCancel: onClose, abiGenerating, isOpenedModal, signedTransaction,
      signTransaction, ...restProps } = this.props;
    return <Button {...restProps} onClick={this.onClick} />;
  }

  @bind
  private onClick(event: React.MouseEvent<HTMLElement>) {
    const { signTransaction, transactionType, data, onClick } = this.props;
    signTransaction(transactionType, data);
    this.setState({ status: 'signing' });
    onClick && onClick(event);
  }
}

// tslint:disable-next-line:max-classes-per-file
declare class ResultComponentClass<T extends TransactionType> extends React.Component<IOwnProps<T> & IButtonProps> { }

export { IProps, IOwnProps };
export default (
  connect(mapState, mapDispatch)(
    SignTransactionButton,
  ) as typeof ResultComponentClass
);
