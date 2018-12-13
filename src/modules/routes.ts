import build from 'build-route-tree';

const rawTree = {
  demo: {
    gui: null,
  },
};

export default build(rawTree);
