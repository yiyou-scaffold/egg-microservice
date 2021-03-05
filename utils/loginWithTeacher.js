'use strict';

const { $request } = require('@/utils/request');

module.exports = async () => {
  try {
    await $request({
      url: '/api/user/login',
      body: {
        username: '孔丘',
        password: 'yy20160315',
      },
    });
  } catch (error) {
    throw error;
  }
};
