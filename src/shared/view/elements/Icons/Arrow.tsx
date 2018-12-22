import * as React from 'react';
import { GetProps } from '_helpers';

import SvgIcon from '@material-ui/core/SvgIcon';

// tslint:disable:max-line-length
function Question(props: GetProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 18 18">
      <g fill="none" fill-rule="evenodd" stroke="#868686" stroke-linecap="round" stroke-width="1.5">
        <path d="M7.872 13.592l5.2-5.201M13.073 8.391L7.872 3.19" />
      </g>
    </SvgIcon>
  );
}

export default Question;
