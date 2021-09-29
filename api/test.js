const se = require('./send-email')

let req = {
    query: {},
    cookies: {},
    body: {
        name: 'Teste',
        email: 'teste@gmail.com',
        subject: 'assunto teste',
        message: 'uhapodiushdpiaushdpiaushd'
    }
}

let res = {
    send(msg) {
        console.log(msg)
    },
    status(code) {
        console.log(`Response Code: ${code}`)
    }
}

console.log(se(req, res))