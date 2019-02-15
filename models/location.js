/**
 * 用户信息
 */
var mongoose = require('../db.js'),
  Schema = mongoose.Schema;

var LocationSchema = new Schema({
  latitude: { type: String },                    //用户账号
  longitude: { type: String },                        //密码                    
  time: { type: Date }                       //最近登录时间
});

module.exports = mongoose.model('location', LocationSchema);