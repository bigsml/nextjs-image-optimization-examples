const withLess = require("next-with-less");
const { merge } = require("webpack-merge");

const BASE_PATH = '/test_base'
var nextConfig = {

  trailingSlash: true,
  
  images: {
    loader: "akamai",
    path: '/',
  },

  basePath: BASE_PATH,
  assetPrefix: BASE_PATH,
  publicRuntimeConfig: {
    basePath: BASE_PATH,
    isProduction: process.env.NODE_ENV === 'production',
  },
}

nextConfig = merge(
  withLess({
    lessLoaderOptions: {
      lessOptions: {
        modifyVars: {
          "@primary-color": "#1B63E0",
          "@border-radius-base": "6px",
          "@menu-item-active-bg": "#1B63E0",
        },
        javascriptEnabled: true,
      },
    },
  }),
  nextConfig
);


module.exports = nextConfig;
