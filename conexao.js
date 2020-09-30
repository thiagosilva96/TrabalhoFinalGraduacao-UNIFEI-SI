var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '99011496', 
  database: 'dadosSUS'
});

connection.connect();
let teste = 'M'

connection.query('select * from VIOLMG17 where DT_NOTIFIC like 20170101 and CS_SEXO like '+teste+'', function(err, rows, fields) {
  if (err) throw err;
  let casos = rows;
  console.log(casos[0]);
  console.log(casos.length);

 console.log(casos);
  console.log('numero de casos de violencia: '+casos.length);



  //console.log(thiago);
  //console.log('Authors: ', rows, '\n\n')
  //console.log('The solution is: ', rows.solution);
});





connection.end();