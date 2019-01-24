import * as React from 'react';
import { Button } from 'shared/view/elements';
import { withDrizzle, InjectDrizzleProps } from 'shared/helpers/react';

interface IState {
  balanceKey: string;
  decimalsKey: string;
}

class ShowBalance extends React.Component<InjectDrizzleProps, IState> {
  public state: IState = { balanceKey: '', decimalsKey: '' };

  public componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.DAI;

    const address = drizzleState.accounts[0];

    const balanceKey = contract.methods.balanceOf.cacheCall(address);
    const decimalsKey = contract.methods.decimals.cacheCall();

    this.setState({ balanceKey, decimalsKey });
  }

  public render() {
    const balance = this.getBalance();
    return balance !== null && <Button disabled variant="outlined">DAI: {balance}</Button>;
  }

  private getBalance(): number | null {
    const { DAI } = this.props.drizzleState.contracts;

    const balance = DAI.balanceOf[this.state.balanceKey];
    const decimals = DAI.decimals[this.state.decimalsKey];

    if (balance && decimals) {
      return Number(balance.value) / 10 ** Number(decimals.value);
    }
    return null;
  }
}

export default withDrizzle(ShowBalance);
