const express = require('express')
const jsonServer = require('json-server')
const auth = require('json-server-auth')
const cors = require('cors')

const app = express()
// const server = jsonServer.create()
const router = jsonServer.router('db.json')
// const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

app.db = router.db

app.use(cors())
app.use(auth)
app.use(router)

app.listen(port)
