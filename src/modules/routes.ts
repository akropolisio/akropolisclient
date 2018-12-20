import build from 'build-route-tree';

const rawTree = {
  demo: {
    gui: null,
    header: null,
    marketplace: null,
    dashboard: null,
  },
};

export default build(rawTree);
