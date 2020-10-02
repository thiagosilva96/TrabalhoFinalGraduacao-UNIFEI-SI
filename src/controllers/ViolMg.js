const knex = require('../database')

module.exports = {
    async index (req, res)  {
       const results = await knex('VIOLMG17')
      
       return res.json(results)
    }
}