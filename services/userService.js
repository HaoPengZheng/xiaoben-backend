var User = require("../models/user");


class UserService {
  constructor() {

  }
  /**
  * 插入
  */
  insert(username, password, createTime) {

    var user = new User({
      username,               //用户账号
      password,               //密码
      createTime,             //最近登录时间
    });

    user.save(function (err, res) {

      if (err) {
        console.log("Error:" + err);
      }
      else {
        console.log("Res:" + res);
      }

    });
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
        user = res;
      }
    })
    return user;
  }
}

module.exports = UserService