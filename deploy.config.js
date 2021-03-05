/* eslint-disable strict */

const path = require('path');

module.exports = {
  local_dist: path.resolve(process.cwd(), './docs/**/*.*'),
  remote_bucket: '/pano-resource-server/',
};
