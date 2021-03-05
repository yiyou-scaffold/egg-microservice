/* eslint valid-jsdoc: "off" */
'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1609149784274_8161';

  // add your middleware config here
  config.middleware = ['cookieParser', 'responseNormalize' ];

  config.userIdentity = {
    token: '',
  };

  config.io = {
    init: { },
    namespace: {
      '/': {
        connectionMiddleware: [ ],
        packetMiddleware: [ ],
      },
    },
  };

  config.cluster = {
    listen: {
      port: 7000,
    },
  };

  config.userIdentity = {
    token: '',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.cors = {
    credentials: true,
    origin: ctx => ctx.get('origin'),
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
