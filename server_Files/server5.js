import { createServer } from 'http';
const PORT = process.env.PORT;
// basic of how to create rest api mdofiying server 4 code using middleware and route handlers for 
// better code mangement
const users = [
    {id:1 , name: 'John Doe'},
    {id:2 , name: 'Jane Doe'},
    {id:3 , name: 'Jim Doe'}
];

// lets say we create a Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // as its middleware we want to make a call to next function to say next do this
}

// JSON middleware
const jsonMiddleware = (req,res,next) => {
    res.setHeader('Content-Type','application/json');
    next();
}

// Route handler for GET /api/users
const getUsersHandler = (req,res) =>{
    res.write(JSON.stringify(users));
    res.end();
};
// Route handler for GET /api/users/:id
const getUserById = (req,res) =>{
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    if (user){
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(user));
    }else{
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'User not found'}));
    }
    res.end();
    
};
// Route handler for POST request for /api/users
const createUserHandler = (req,res) =>{
    let body = '';
    // Listen for data
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const newUser = JSON.parse(body); // converts json to javascript object
        users.push(newUser); // in reality added to db, here we just pushing to memory for eg
        res.statusCode = 201; // successful, something create
        res.write(JSON.stringify(newUser)); // converts javascript object into json
        res.end();
    })
}


// Not found handler
const notFoundHandler = (req,res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message: 'Route not found'}));
    res.end();
}

const server = createServer((req,res) => {
    logger (req, res, () => {
        jsonMiddleware(req,res,() => {
            if(req.url === '/api/users' && req.method === 'GET'){
                getUsersHandler(req,res);
            }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
                getUserById(req,res);
            }else if (req.url === '/api/users' && req.method === 'POST'){
                createUserHandler(req,res);
            }else{
                notFoundHandler(req,res);
            }
        })
        
    });
    
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});