import http from 'http';
const PORT = process.env.PORT;
const server = http.createServer((req,res) => {
    console.log(req.url);
    console.log(req.method);
    //res.write('Hello World');
    //res.end(); // in express its taken care automatically

    // the above two lines can also be implemented with just end method
    // we can also set header like this
 //   res.setHeader('Content-Type', 'text/html');
    // we can also set and send status code with response like
 //   res.statusCode = 400;
    // instead of above teo line we can do the same thing in following way
 //   res.writeHead(500, { 'Content-type': 'application.json' })
 res.writeHead(200, { 'Content-type': 'text/html' })
    res.end('<h1>Hello World</h1>');
 //   res.end(JSON.stringify({message: "Server Error "}));    
    // update requires restarting server, we can have nodemon in package json to auto 
    // restart server on code change save
    // we can also modify package json scripts to add start: node server.js and run via npm start
    // or script can also be dev: node server.js then run via npm run dev  (dev environment prod env etc)
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

// npm i -D nodemon - nodemon is included in devDependencies instead of just dependencies in package.json (without -D flag)
// to use nodemon modify scripts from start: node server.js to start: nodemon server.js and run via npm start
// package-lock.json has dependecy tree for all dependicies
// never push node module folder to github as everything needed is in package.json
// or you can create .gitignore file and add nodemodule folder in it