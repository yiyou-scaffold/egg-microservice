'use strict';


module.exports = function normalizeCookie(cookies) {
  return Object.keys(cookies).map(cookie_name => {
    return [ cookie_name, cookies[cookie_name] ].join('=');
  }).join(';');
};
