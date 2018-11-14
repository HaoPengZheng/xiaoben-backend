var rp = require('request-promise');
var fn_Pic = async (ctx, next) => {
  let bingPic ={};
  await rp('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=10&nc=1501558320736&pid=hp').then(
    response=>{
      bingPic =  response;
    }
  )
  ctx.response.type ='application/json'
  ctx.response.status = 200;
  ctx.body = bingPic;
};

module.exports = {
  'GET /api/bingPic': fn_Pic,

};