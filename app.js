'use strict';
require('moment-round');
require('module-alias').addAliases({ '@': __dirname });

class AppBootHook {
  constructor(app) {
    this.app = app;
  }
}

module.exports = AppBootHook;
