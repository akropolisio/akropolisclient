import build from 'build-route-tree';

const rawTree = {
  demo: {
    gui: null,
    header: {
      marketplace: null,
      dashboard: null,
      profile: null,
    },
  },
};

export default build(rawTree);
