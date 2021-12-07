const se = require('./send-email')

let req = {
    query: {},
    cookies: {},
    body: {
        name: 'Teste formulário de contato 1.0',
        email: 'bernardojbraga@gmail.com',
        subject: 'Teste Assunto UPDATE',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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