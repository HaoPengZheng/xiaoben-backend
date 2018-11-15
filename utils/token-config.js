const token_config = {
  secretKey : 'xiaoben-token',
  expiresIn : '2h',
  unlessPath:  [/\/api\/user/,/\/api\/login/]
}
module.exports = token_config;