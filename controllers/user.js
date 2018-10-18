
const APIError = require('../middleware/rest').APIError;

const UserService = require('../services/userService')

const User = require("../models/user");

let userService = new UserService();
module.exports = {
  'POST /api/login': async (ctx, next) => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    let user = await userService.findOne({username});
    console.log("想登录")
    console.log(user);
    if(user.password == password){
      ctx.body = "登录成功";
    }else{
      ctx.body = "登录失败";
    }
  },
  'POST /api/user': async (ctx, next) => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    let createTime = new Date();
    console.log(username);
    userService.insert(username, password, createTime);
    // => POST body
    ctx.body = JSON.stringify(ctx.request.body);
  },
};
