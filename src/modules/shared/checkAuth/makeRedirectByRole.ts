import * as R from 'ramda';
import { selectors } from 'services/user';
import { defaultPageByRole } from 'modules/routes';

import { IAppReduxState } from 'shared/types/app';
import { UserRole } from 'shared/types/models';
import { capitalizeFirstLetter } from 'shared/helpers/string';
import { connectedRouterRedirect } from 'shared/helpers/authWrapper';

export default function makeRedirectByRole(allowedRoles: UserRole[]) {
  return connectedRouterRedirect({
    authenticatedSelector: (state: IAppReduxState) => {
      const role = selectors.selectUserRole(state);
      return !!role && allowedRoles.includes(role);
    },
    wrapperDisplayName: `Is${allowedRoles.map(capitalizeFirstLetter).join('Or')}Redirect`,
    allowRedirectBack: false,
    redirectPath: R.pipe(selectors.selectUserRole, R.prop(R.__, defaultPageByRole)),
  });
}
