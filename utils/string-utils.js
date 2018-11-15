let stringUtils = {};
stringUtils.isNoNullorUndefiend=function(str){
  if(str === undefined || str === null || str === ""){
    return false;
  }
  return true;
}
module.exports = stringUtils;