import routes from 'modules/routes';
// import { selectors } from 'services/user';
import { connectedRouterRedirect } from 'shared/helpers/authWrapper';

export default connectedRouterRedirect({
  authenticatedSelector: () => true,
  wrapperDisplayName: 'IsNotLoggedRedirect',
  allowRedirectBack: true,
  redirectPath: routes.auth.role.getRedirectPath({ role: 'beneficiary' }),
});
