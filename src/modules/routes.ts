import build from 'build-route-tree';

const rawTree = {
  demo: {
    gui: null,
    modal: null,
  },
};

export default build(rawTree);
