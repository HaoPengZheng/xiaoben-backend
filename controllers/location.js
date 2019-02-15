
const LocationService = require('../services/locationService')
const SocketHelper = require('../socket/index')
var fn_saveLocation = async (ctx, next) => {
  let locationService = new LocationService()
  let message = await locationService.insert(ctx.request.body.latitude, ctx.request.body.longitude, new Date().toDateString());

  if(SocketHelper.getSocket()){
    SocketHelper.getSocket().emit('location',"11111111111")
  }
  ctx.body = JSON.stringify(ctx.request.body);
  
};

var fn_getLocation = async(ctx,next) =>{
  let locationService = new LocationService()
  let location = await locationService.getLocation()
  ctx.body = JSON.stringify(location);
}

module.exports = {
  'POST /public/location': fn_saveLocation,
  'GET /public/location': fn_getLocation
};