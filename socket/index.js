//使用socket io

const port = 3333;
//socket方式
class SocketHelper {
  init(app) {
    var server = require('http').Server(app.callback());
    const io = require('socket.io')(server);
    server.listen(process.env.PORT || port, () => {
      console.log(`app socket serve run at : http://127.0.0.1:${port}`);
    })

    io.on('connection', socket => {
      console.log('socket连接成功');


      socket.on('send', data => {
        console.log('客户端发送的内容：', data);
        socket.emit('getMsg', '我是返回的消息... ...');
      })

      setTimeout(() => {
        socket.emit('getMsg', '我是初始化3s后的返回消息... ...')
      }, 3000)
      this.socket = socket
      this.server = server
    })
  }
  getSocket(){
    return this.socket
  }
}


module.exports = new SocketHelper()