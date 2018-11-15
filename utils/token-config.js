const token_config = {
  secretKey : 'xiaoben-token',
  expiresIn : '2h',
  unlessPath:  [/\/api\/user/,/\/api\/login/,/\/api\/bingPic/],
}
module.exports = token_config;