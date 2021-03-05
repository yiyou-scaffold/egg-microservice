'use strict';

console.log('测试环境=====>');

const { request_config_extend } = require('@cyber-library/request');
request_config_extend({
  base_url: 'https://test.yi-you.org/',
});

exports.io = {

};

exports.redis = {
  client: {
    port: 6379,
    host: '10.0.0.10',
    password: false,
    db: 0,
  },
};
