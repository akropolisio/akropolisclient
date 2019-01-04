import * as React from 'react';
import { SignTransactionModal } from 'services/signTransaction';

class App extends React.Component {
  public render() {
    const { children } = this.props;

    return (
      <>
        {children}
        <SignTransactionModal />
      </>
    );
  }
}

export default App;
