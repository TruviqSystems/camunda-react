const proxy = require('http-proxy-middleware')
module.exports=function(app){
    app.use(proxy('/',{target:'http://localhost:8080'})),
    app.use(proxy('/approved',{target:'http://localhost:3001'}))
}