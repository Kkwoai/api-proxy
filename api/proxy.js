const { createProxyMiddleware } = require('http-proxy-middleware')
const path = require('path'); //系统路径模块
const fs = require('fs'); //文件模块

module.exports = (req, res) => {
  let file = path.join(__dirname, 'version.json'); //文件路径，__dirname为当前运行js文件的目录
  //读取json文件
  fs.readFile(file, 'utf-8', function(err, data) {
    if (err) {
          res.send('文件读取失败');
      } else {
          res.json(data);
      }
  });

}