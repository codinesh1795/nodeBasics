import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const PORT = process.env.PORT;
// GET current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname )

const server = http.createServer((req,res) => {
    // console.log(req); // console log entire request to see the contents of it, like headers,
    // methods, cookies, url, etc, 
    // Now for routing we have to do checks, express takes care of it automatically however here we will learn how it
    // i.e nodejs does it under the hood
    try {
        //check if Get request
        if (req.method === 'GET'){
            // the below implementation if faulty as we can send post and get request to one path
            // check if method is get and allow that endpoint as i will now be implemented with try catach block
            if (req.url === '/'){
                res.writeHead(200, { 'Content-type': 'text/html' })
                res.end('<h1>Hello World</h1>');
            }else if (req.url === '/about'){
                res.writeHead(200, { 'Content-type': 'text/html' })
                res.end('<h1>About</h1>');
            }else {
                // for any other route
                res.writeHead(404, { 'Content-type': 'text/html' })
                res.end('<h1>Not Found</h1>');
            }
        }else{
                throw new Error('Method not allowed')
            }
    } catch (error) {
        // for any other error
        res.writeHead(500, { 'Content-type': 'text/plain' })
        res.end('Server Error');
    }
    
    
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

