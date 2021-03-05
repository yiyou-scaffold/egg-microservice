'use strict';

const normalizeCookie = require('@/utils/normalizeCookie');

module.exports = options => {
  return async (context, next) => {
    const { token } = options;
    if (token) {
      context.token = token;
    } else {
      const token = normalizeCookie(context.cookie);
      context.token = token;
    }
    await next();
  };
};
