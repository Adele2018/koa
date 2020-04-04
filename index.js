let koa = require('koa');
const fs = require('fs')
const app = new koa();
app.use((ctx, next) => {
    console.log(ctx.path);
    
    if (ctx.path === '/d3' && ctx.method == 'GET') {
        ctx.set('Content-Type', 'text/html;charset=utf-8')
        ctx.body = fs.createReadStream('./d3.html')
    } else if (ctx.path === '/d3/d3.min.js' && ctx.method == 'GET'){
        ctx.set('Content-Type', 'text/html;charset=utf-8')
        ctx.body = fs.createReadStream('./d3/d3.js')
    }else {
        // ctx.body = 'inin'
        next()
    }
    
})
app.listen(3000)