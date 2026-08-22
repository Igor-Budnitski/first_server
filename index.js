const http = require('http')

const server = http.createServer((request, response)=> {
    response.write("Igor's server.")
    response.end()
})

server.listen(3003)