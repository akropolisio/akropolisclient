import * as React from 'react';

import { ITranslateProps, i18nConnect, tKeys as allKeys } from 'services/i18n';
import { IFund } from 'shared/types/models';
import { StylesProps, provideStyles } from './Fund.style';

const tKeys = allKeys.components.fund;

interface IProps {
  fund: IFund;
}

function Fund(props: IProps & StylesProps & ITranslateProps) {
  const { classes, fund, t } = props;
  const { title, commission, policy } = fund;
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        {title}
      </div>
      <div className={classes.commission}>
        {`${t(tKeys.commissionLabel.getKey())}: ${commission}`}
      </div>
      <div className={classes.policy}>
        {`${t(tKeys.policyLabel.getKey())}: ${policy}`}
      </div>
    </div>
  );
}

export default provideStyles(i18nConnect(Fund));
