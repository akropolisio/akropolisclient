import routes from 'modules/routes';
import { selectors } from 'services/user';
import { connectedRouterRedirect } from 'shared/helpers/authWrapper';

export default connectedRouterRedirect({
  authenticatedSelector: selectors.selectIsLogged,
  wrapperDisplayName: 'IsNotLoggedRedirect',
  allowRedirectBack: true,
  redirectPath: routes.marketplace.getRedirectPath(),
});
