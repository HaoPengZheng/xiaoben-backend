var fn_saveLocation = async (ctx, next) => {
  console.log( ctx.request.body)
  ctx.body = JSON.stringify(ctx.request.body);
};


module.exports = {
  'POST /public/location': fn_saveLocation,

};