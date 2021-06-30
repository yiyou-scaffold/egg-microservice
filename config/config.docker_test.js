'use strict';

console.log('docker生产环境=====>');

const getCurrentServerDomain = require('@yiyou/server-host').default;
const { request_config_extend } = require('@cyber-library/request');
request_config_extend({
  base_url: getCurrentServerDomain(),
});

exports.io = {

};

exports.redis = {
  client: {
    port: 6379,
    host: 'redis',
    password: false,
    db: 0,
  },
};
