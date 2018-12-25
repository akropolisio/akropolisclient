import build, { getParam } from 'build-route-tree';

const rawTree = {
  auth: {
    role: getParam({
      signIn: null,
      signUp: null,
    }),
  },
  demo: {
    gui: null,
    translations: null,
    adaptability: null,
    header: {
      marketplace: null,
      dashboard: null,
      profile: null,
    },
  },
};

export default build(rawTree);
