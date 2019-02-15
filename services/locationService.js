var Loaction = require("../models/location");

class LocationService {
  constructor() {

  }
  /**
  * 插入
  */
  save(location) {
    return new Promise((resolve, reject) => {
      var message = {
        code: 200
      };
      location.save(function (err, res) {
        if (err) {
          console.log(err);
        }
        else {
          console.log("Res:" + res);
          message.msg = "添加成功";
        }
        resolve(message);
      })
    })
  }
  async insert(latitude, longitude, createTime) {
    let time = new Date()
    var loaction = new Loaction({
      latitude,               //纬度
      longitude,               //经度
      time,             //时间
    });
    let message = await this.save(loaction);
    console.log(message)
    return message;
  }


  getNewLocation() {
    return new Promise((resolve, reject) => {
      var sort = { 'time': -1 };
      console.log("1")
      Loaction.find().limit(1).sort(sort).exec(function (err, res) {
        if (err) {
          console.log("Error:" + err);
        }
        else {
          console.log("2")
          console.log("location:" + res)
          console.log("Res:" + res);
        }
        resolve(res)
      })
    })
  }
  async getLocation() {
    let location = await this.getNewLocation()
    return location
  }
}

module.exports = LocationService