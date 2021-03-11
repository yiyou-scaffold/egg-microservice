/* eslint-disable strict */

const path = require('path');
const { name } = require('./package.json');

module.exports = {
  local_dist: path.resolve(process.cwd(), './docs/**/*.*'),
  remote_bucket: name,
};
