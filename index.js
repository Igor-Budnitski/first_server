const http = require('http')

let reqCounter = 0;

const server = http.createServer((request, response)=> {

    // If request URL NOT equal to favicon then increase the counter
    if (request.url !== '/favicon.ico'){
        reqCounter++;
    }

    // switching between different routes
    switch (request.url){
        case '/':
            response.write('Home page.\n')
            break
        case '/students':
            response.write('Student\'s page.\n')
            break;
        case 'courses':
            response.write('Course\'s page\n')
            break;
        default:
            response.write('404 NOT FOUND\b')
    }


    response.write("Igor's server. \nRequests number:" + reqCounter)
    response.end()
})

server.listen(3003)