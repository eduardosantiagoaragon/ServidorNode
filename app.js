const serverhttp = require ('http');

const port = 3059;

const server = serverhttp.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type":"text-plain"});
    res.end('Hola desde un server en Node con el moduelo http de Node.');
});

server.listen(port,()=> {
    console.log(`Servidor funcional por la URL: http;//127...1: ${port}`)
});




