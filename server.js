import http from 'node:http';
import {readFile} from 'node:fs/promises';
const files={'/':'index.html','/index.html':'index.html','/styles.css':'styles.css','/app.js':'app.js','/model.js':'model.js'};
const types={html:'text/html',css:'text/css',js:'text/javascript'};
const port=Number(process.env.PORT||3000);
http.createServer(async(req,res)=>{const path=new URL(req.url,'http://localhost').pathname;const file=files[path];if(!file){res.writeHead(404);res.end('Not found');return;}try{const data=await readFile(new URL(file,import.meta.url));res.writeHead(200,{'Content-Type':`${types[file.split('.').pop()]}; charset=utf-8`,'X-Content-Type-Options':'nosniff'});res.end(data);}catch{res.writeHead(500);res.end('Unable to load file');}}).listen(port,'127.0.0.1',()=>console.log(`Dan dashboard: http://localhost:${port}`));
