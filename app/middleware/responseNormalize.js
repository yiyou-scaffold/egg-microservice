/* eslint-disable valid-jsdoc */
'use strict';

/**
 * 返回值和错误对象的统一处理
 * **/
module.exports = () => {
  return async (context, next) => {
    try {
      const returnValue = await next();
      if (returnValue) {
        context.body = { code: 0, status: 'succees', message: 'ok', data: returnValue };
      } else {
        context.body = { code: 0, status: 'succees', message: 'ok', data: null };
      }
    } catch (error) {
      context.body = { code: 10000, status: 'error', message: error.message, data: {} };
    }
  };
};
