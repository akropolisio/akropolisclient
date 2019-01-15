import build, { getParam } from 'build-route-tree';
import { UserRole } from 'shared/types/models';

const rawTree = {
  auth: {
    role: getParam({
      signUp: null,
    }),
  },
  profile: {
    section: getParam(null),
  },
  transactions: null,
  dashboard: null,
  marketplace: null,
  demo: {
    gui: null,
    modal: null,
    translations: null,
    adaptability: null,
    authRedirect: null,
  },
  pageNotFound: null,
};

const routes = build(rawTree);

export const defaultPageByRole: Record<UserRole, string> = {
  assetManager: routes.profile.getRedirectPath(),
  beneficiary: routes.profile.getRedirectPath(),
  boardMember: routes.profile.getRedirectPath(),
  fundOwner: routes.profile.getRedirectPath(),
};

export default routes;
