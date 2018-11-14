var User = require("../models/user");
var svgCaptcha = require('svg-captcha');

class UserService {
  constructor() {

  }
  /**
  * 插入
  */
  save(user) {
    return new Promise((resolve, reject) => {
      var message = {
        code: 200
      };
      user.save(function (err, res) {
        if (err) {
          console.log(err);
          message.code = 400;
          if (err.code == 11000) {
            message.msg = "用户名已存在";

          } else {
            message.msg = "注册失败"
          }
        }
        else {
          console.log("Res:" + res);
          message.msg = "注册成功";
        }
        resolve(message);
      })
    })
  }
  async insert(username, password, createTime) {

    var user = new User({
      username,               //用户账号
      password,               //密码
      createTime,             //最近登录时间
    });
    let message = await this.save(user);
    console.log(message)
    return message;
  }


  update() {
    var wherestr = { 'username': 'Tracy McGrady' };
    var updatestr = { 'userpwd': 'zzzz' };
    User.update(wherestr, updatestr, function (err, res) {
      if (err) {
        console.log("Error:" + err);
      }
      else {
        console.log("Res:" + res);
      }
    })
  }

  async findOne(wherestr) {
    let user = {};
    await User.findOne(wherestr, function (err, res) {
      if (err) {
        console.log("Error:" + err);
      }
      else {
        console.log("Res:" + res);
      }
      user = res;
    })
    return user;
  }

  createCaptcha() {
    // 随机生成一个验证码
    var captcha = svgCaptcha.create();
    return captcha;
  }
}

module.exports = UserService