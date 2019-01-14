import * as React from 'react';

import { IFund } from 'shared/types/models';
import { StylesProps, provideStyles } from './FundLogo.style';

interface IProps {
  fund: IFund;
}

function FundLogo(props: IProps & StylesProps) {
  const { classes, fund } = props;
  return (
    <div className={classes.root}>{fund.logo}</div>
  );
}

export default provideStyles(FundLogo);
