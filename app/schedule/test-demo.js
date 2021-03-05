'use strict';

const { Subscription } = require('egg');


module.exports = () => {
  return class ClassStatus extends Subscription {
    static get schedule() {
      return {
        disabled:true,
        env: [ 'test', 'prod' ],
        interval: '5s',
        type: 'worker',
      };
    }

    async subscribe() {
      
    }
  };
};
