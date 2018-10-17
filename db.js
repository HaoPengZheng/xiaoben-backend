var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://120.79.177.224:27017/xiaoben';
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log('数据库已创建');
  var dbase = db.db("xiaoben");
  dbase.createCollection('site', function (err, res) {
    if (err) throw err;
    console.log("创建集合!");
    db.close();
  });
});