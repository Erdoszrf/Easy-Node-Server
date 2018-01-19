var http = require("http")
var fs = require("fs")

var url = require("url")
var server = http.createServer(function(req,res){
  var pathObj = url.parse(req.url,true)
  var path = pathObj.pathname
  var method =req.method
  if(path ==='/sample'){
    res.setHeader('content-type','text/html;charset="utf-8"')
    var string = fs.readFileSync('./sample/test.html', 'utf-8')
    res.end(string)
  }else{
    res.statusCode = 404
    res.setHeader('Content-Type','text/html')
    var notFoundFile = fs.readFileSync('./404.html', 'utf-8')
    res.end(notFoundFile)
  }
  console.log(method + ' ' + req.url)
})
server.listen(8088)
console.log('监听 ' + 8088 + ' 成功，请用在空中转体720度然后用电饭煲打开 http://localhost:' + 8088)