import * as React from 'react';
import { SignTransactionModal } from 'services/signTransaction';
import { ScrollTop } from 'shared/view/components';
import { Adaptive } from 'services/adaptability';

class App extends React.Component {
  public render() {
    const { children } = this.props;

    return (
      <>
        {children}
        <SignTransactionModal />
        <Adaptive from="md"> <ScrollTop /></Adaptive>
      </>
    );
  }
}

export default App;
