import build, { getParam } from 'build-route-tree';

const rawTree = {
  auth: {
    role: getParam({
      signUp: null,
    }),
  },
  demo: {
    gui: null,
    modal: null,
    translations: null,
    adaptability: null,
    marketplace: null,
    dashboard: null,
    profile: null,
  },
};

export default build(rawTree);
