import build from 'build-route-tree';

const rawTree = {
  auth: {
    login: null,
  },
  demo: {
    gui: null,
    translations: null,
  },
};

export default build(rawTree);
