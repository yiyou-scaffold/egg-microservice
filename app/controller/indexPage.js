'use strict';
const { Controller } = require('egg');
const {name} =require("../../package.json");

class IndexPageController extends Controller {
  async index() {
    return `微服务 ${name} 已经开启`;
  }
}

module.exports = IndexPageController;
