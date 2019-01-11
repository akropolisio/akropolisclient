import * as React from 'react';

import { StylesProps, provideStyles } from './GetInFundModal.style';
import { Modal } from 'shared/view/components';
import { ITranslateProps, i18nConnect, tKeys } from 'services/i18n';
import GetInFundForm from '../GetInFundForm/GetInFundForm';
import { IFund } from 'shared/types/models';

interface IProps {
  fund: IFund;
  isOpened: boolean;
  onClose(): void;
  onSuccess(): void;
}

class GetInFundModal extends React.PureComponent<IProps & StylesProps & ITranslateProps, {}> {
  public render() {
    const { t, classes, isOpened, onClose, onSuccess, fund } = this.props;
    return (
      <Modal
        size="large"
        titleAlign="left"
        isOpen={isOpened}
        onClose={onClose}
        title={t(tKeys.features.getInFund.modalTitle.getKey())}
      >
        <div className={classes.root}>
          <div className={classes.form}><GetInFundForm fund={fund} onSuccess={onSuccess} onCancel={onClose} /></div>
          <div className={classes.fond}>Fond Desc</div>
        </div>
      </Modal>
    );
  }
}

export default i18nConnect(provideStyles(GetInFundModal));
