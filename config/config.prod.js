'use strict';

console.log('生产环境=====>');

const { request_config_extend } = require('@cyber-library/request');
request_config_extend({
  base_url: 'https://yi-you.org/',
});

exports.redis = {
  client: {
    port: 6379,
    host: 'vmi1.yi-you.org',
    password: false,
    db: 0,
  },
};

exports.io = {

};
