'use strict';
require('moment-round');
require('module-alias').addAliases({ '@': __dirname });
require('events').EventEmitter.defaultMaxListeners = 0;

class AppBootHook {
  constructor(app) {
    this.app = app;
  }
}

module.exports = AppBootHook;
