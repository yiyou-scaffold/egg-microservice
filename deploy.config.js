/* eslint-disable strict */

const path = require('path');
const { name } = require('./package.json');

/**
 * @link https://yiyou-static.oss-cn-hangzhou.aliyuncs.com/{name}/docs/index.html
 * **/

module.exports = {
  local_dist: path.resolve(process.cwd(), './docs/**/*.*'),
  remote_bucket: name,
};
