import build, { getParam } from 'build-route-tree';

const rawTree = {
  auth: {
    selectRole: null,
    signIn: {
      role: getParam(null),
    },
    signUp: {
      role: getParam(null),
    },
  },
  demo: {
    gui: null,
    translations: null,
    header: {
      marketplace: null,
      dashboard: null,
      profile: null,
    },
  },
};

export default build(rawTree);
