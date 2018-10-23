
const APIError = require('../middleware/rest').APIError;

const UserService = require('../services/userService')

const User = require("../models/user");


let userService = new UserService();
module.exports = {
  'POST /api/login': async (ctx, next) => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    console.log("await 前")
    let user = await userService.findOne({ username });
    console.log("想登录")
    console.log(user);
    if (user.password == password) {
      ctx.body = "登录成功";
    } else {
      ctx.body = "登录失败";
    }
  },
  'POST /api/user': async (ctx, next) => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    let createTime = new Date();
    console.log(username);
    let message = await userService.insert(username, password, createTime);
    console.log("等待后");
    // => POST body
    console.log(ctx);
    ctx.response.status = message.code;
    ctx.body = JSON.stringify(message);
  },
  'GET /api/captcha': async (ctx, next) => {
    let captcha = userService.createCaptcha();
    ctx.body = captcha;
  },

};
