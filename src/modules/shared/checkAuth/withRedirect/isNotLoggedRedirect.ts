import * as R from 'ramda';

import { defaultPageByRole } from 'modules/routes';
import { selectors } from 'services/user';
import { locationHelperBuilder, connectedRouterRedirect } from 'shared/helpers/authWrapper';

const locationHelper = locationHelperBuilder({});

export default connectedRouterRedirect({
  authenticatedSelector: R.pipe(selectors.selectIsLogged, R.not),
  wrapperDisplayName: 'IsLoggedRedirect',
  allowRedirectBack: false,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) ||
    R.pipe(selectors.selectUserRole, R.prop(R.__, defaultPageByRole))(state),
});
