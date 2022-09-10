// @ts-check

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'client-one',
  exposes: {
    './Module': './src/remote-entry.tsx',
  },
};

module.exports = moduleFederationConfig;
