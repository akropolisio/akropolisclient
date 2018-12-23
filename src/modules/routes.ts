import build from 'build-route-tree';

const rawTree = {
  auth: {
    login: null,
  },
  demo: {
    gui: null,
  },
};

export default build(rawTree);
