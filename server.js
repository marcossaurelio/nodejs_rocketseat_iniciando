const http = require('http');

http
    .createServer((request, response) => {
        response.writeHead(200, {'Content-Type': 'application.json'});
    
        if (request.url === '/produto'){
            response.end(
                JSON.stringify({
                    message: 'rota de produtos'
                })
            )
        }

        if (request.url === '/usuario'){
            response.end(
                JSON.stringify({
                    message: 'rota de usuario'
                })
            )
        }

        response.end(
            JSON.stringify({
                message: 'qualquer outra rota'
            })
        )
    })
    .listen(4001, () => console.log('Servidor está rodando na porta 4001'));