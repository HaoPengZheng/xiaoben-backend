var http = require("http");
var fn_Pic = async (ctx, next) => {
  http.get('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&nc=1501558320736&pid=hp', (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
    let error;
    if (statusCode !== 200) {
      error = new Error('Request Failed.\n' +
        `Status Code: ${statusCode}`);
    }else{
      console.log(res);
    }
  })
};

module.exports = {
  'GET /api/bingPic': fn_Pic,

};