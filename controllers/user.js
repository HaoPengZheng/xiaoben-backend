
const APIError = require('../middleware/rest').APIError

const UserService = require('../services/userService')

const User = require("../models/user")

const jwt = require('jsonwebtoken')

const stringUtils = require('../utils/string-utils')

const tokenConfig = require('../utils/token-config')

let userService = new UserService();
module.exports = {
  'POST /api/login': async (ctx, next) => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    console.log(password);
    let user = await userService.findOne({ username })
    if (user!=null&&password == user.password) {
      const token = jwt.sign({
        username:user.username,
        password:user.password,
        id:user.id
      },tokenConfig.secretKey,{
        expiresIn:tokenConfig.expiresIn
      })
      ctx.body = {
        code:"200",
        message:"登录成功",
        token,
      }
    } else {
      ctx.body = {
        code:"400",
        message:"登录失败",
        token,
      }
      ctx.status = 400;
    }
  },
  'POST /api/user': async (ctx, next) => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    if(!(stringUtils.isNoNullorUndefiend(username)&&stringUtils.isNoNullorUndefiend(password))){
      return ctx.body = {
        code:"400",
        message:"用户名或密码不能为空"
      }
    }
    let createTime = new Date();
    let message = await userService.insert(username, password, createTime);
    // => POST body
    ctx.response.status = message.code;
    ctx.body = JSON.stringify(message);
  },
  'GET /api/captcha': async (ctx, next) => {
    let captcha = userService.createCaptcha();
    ctx.body = captcha;
  },

};
