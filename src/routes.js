const express = require('express')
const knex =  require('./database')
const ViolMg = require('./controllers/ViolMg')                                                                                                                  

const routes = express.Router()

routes.get('/VIOLMG17', ViolMg.index)

module.exports = routes