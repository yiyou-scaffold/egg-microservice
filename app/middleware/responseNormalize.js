/* eslint-disable valid-jsdoc */
'use strict';
const { isNil } = require('lodash');

/**
 * 返回值和错误对象的统一处理
 * **/
module.exports = () => {
  return async (context, next) => {
    try {
      const returnValue = await next();
      if (returnValue instanceof Buffer) {
        context.response.status = 200;
        context.response.body = returnValue;
        return false;
      }
      if (isNil(returnValue)) {
        context.response.status = context.status;
        return false;
      }
      context.response.status = 200;
      context.response.body = { code: 0, status: 'succees', message: 'ok', data: returnValue };
      return false;
    } catch (error) {
      context.response.body = { code: 10000, status: 'error', message: error.message, data: {} };
      return false;
    }
  };
};
