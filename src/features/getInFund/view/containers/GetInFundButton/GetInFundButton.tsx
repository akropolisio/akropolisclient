import * as React from 'react';
import { bind } from 'decko';
import { GetProps } from '_helpers';

import { ITranslateProps, i18nConnect, tKeys } from 'services/i18n';
import { IFund } from 'shared/types/models';
import { Button } from 'shared/view/elements';

import { GetInFundModal } from '../../components';

interface IOwnProps {
  fund: IFund;
  onSuccess?(fund: IFund): void;
}

interface IState {
  isOpenedModal: boolean;
}

type IProps = IOwnProps & ITranslateProps & GetProps<typeof Button>;

class GetInFundButton extends React.PureComponent<IProps, IState> {
  public state: IState = { isOpenedModal: false };
  public render() {
    const { isOpenedModal } = this.state;
    const { fund, onSuccess, t, locale, children, ...restProps } = this.props;
    return (
      <>
        <Button {...restProps} onClick={this.onClick}>
          {children || t(tKeys.features.getInFund.getButton.getKey())}
        </Button>
        <GetInFundModal fund={fund} isOpened={isOpenedModal} onClose={this.onClose} onSuccess={this.onSuccess} />
      </>
    );
  }

  @bind
  private onClick(event: React.MouseEvent<HTMLElement>) {
    const { onClick } = this.props;
    this.setState({ isOpenedModal: true });
    onClick && onClick(event);
  }

  @bind
  private onClose() {
    this.setState({ isOpenedModal: false });
  }

  @bind
  private onSuccess() {
    const { onSuccess, fund } = this.props;
    this.setState({ isOpenedModal: false });
    onSuccess && onSuccess(fund);
  }
}

export default i18nConnect(GetInFundButton);
