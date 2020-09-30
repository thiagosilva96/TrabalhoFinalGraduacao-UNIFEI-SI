let knex = require('knex')({
    client: 'mysql',
    version: '5.7',
    connection: {
      host     : 'localhost',
      user     : 'root',
      password : '99011496', 
      database: 'dadosSUS'
    }
  });

  console.log (knex)

  knex('VIOLMG17').where('dt_notific',20150929);