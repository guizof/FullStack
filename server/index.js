import { createServer } from 'node:http'


const servidor = createServer((request, response) => {
    console.log('qualquer coisa')
    response.write('ta funcionando 2')
    return response.end()
})

servidor.listen(7000)