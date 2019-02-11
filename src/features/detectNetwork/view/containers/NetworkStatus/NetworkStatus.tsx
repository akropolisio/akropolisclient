import * as React from 'react';
import { connect } from 'react-redux';

import { IAppReduxState } from 'shared/types/app';
import { ITranslateProps, i18nConnect } from 'services/i18n';

import { NetworkStatus as Status } from '../../../namespace';
import * as selectors from './../../../redux/selectors';
import { StylesProps, provideStyles } from './NetworkStatus.style';

interface IStateProps {
  status: Status;
}

type IProps = IStateProps & StylesProps & ITranslateProps;

function mapState(state: IAppReduxState): IStateProps {
  return {
    status: selectors.selectNetworkStatus(state),
  };
}

class NetworkStatus extends React.PureComponent<IProps, {}> {
  public render() {
    const { classes, status } = this.props;
    return (
      <div className={classes.root}>{status}</div>
    );
  }
}

export { NetworkStatus };
export default (
  connect(mapState)(
    i18nConnect(provideStyles(NetworkStatus)),
  )
);
