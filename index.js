const jsonServer = require('json-server')

const bloodBankServer = jsonServer.create()

const router = jsonServer.router('db.json')

const middleware = jsonServer.defaults()

bloodBankServer.use(middleware)

bloodBankServer.use(router)

const port  = 4000 || process.env

bloodBankServer.listen(port, ()=> {
    console.log(`server running successfully at port ${port}`);
})