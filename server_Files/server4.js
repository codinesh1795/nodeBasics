import { createServer } from 'http';
const PORT = process.env.PORT;
// basic of how to create rest api
const users = [
    {id:1 , name: 'John Doe'},
    {id:2 , name: 'Jane Doe'},
    {id:3 , name: 'Jim Doe'}
];

const server = createServer((req,res) => {
    if(req.url === '/api/users' && req.method === 'GET'){
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
        const id = req.url.split('/')[3];
        const user = users.find((user) => user.id === parseInt(id));
        if (user){
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(user));
        }else{
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 404;
            res.write(JSON.stringify({message: 'User not found'}));
            res.end();
        }
        res.end();
    }else{
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'Route not found'}));
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});