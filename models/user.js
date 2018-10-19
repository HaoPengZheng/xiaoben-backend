/**
 * 用户信息
 */
var mongoose = require('../db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({          
    username : { type: String ,unique:true},                    //用户账号
    password: {type: String},                        //密码                    
    createTime : { type: Date}                       //最近登录时间
});

module.exports = mongoose.model('User',UserSchema);