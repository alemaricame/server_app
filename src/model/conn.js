var mysql = require('mysql');

var con = mysql.createConnection({
  host: "bdhysarjgb6h6jh06ml3-mysql.services.clever-cloud.com",
  user: "un64uugszhtlzz3n",
  password: "5WbUfn9kw4eMaNA4M2hX",
  database: "bdhysarjgb6h6jh06ml3"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;