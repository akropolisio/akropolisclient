import * as React from 'react';
import { InjectedAuthRouterProps } from 'shared/helpers/authWrapper';

function DemoAuthRedirect(_props: InjectedAuthRouterProps) {
  return (
    <div style={{ padding: 20 }}>
      {'This page can only be accessed using a reverse redirect from the authorization page, '}
      {'if you log in as Beneficiary or Board member.'}
    </div>
  );
}

export default DemoAuthRedirect;
