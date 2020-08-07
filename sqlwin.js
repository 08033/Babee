const sql = require("mssql/msnodesqlv8");
//msnodesqlv8 module is requiered for Windows Authentication without using Username and Password

const pool = new sql.ConnectionPool({
  database: "pos",
  server: "localhost",
  driver: "{SQL Server Native Client 11.0}",//"msnodesqlv8",
  options: {
    trustedConnection: true,
  },
});

pool.connect().then(() => {
  //simple query
  var queryString = "SELECT * FROM brand";
  pool.request().query(queryString, (err, result) => {
    if (err) console.log(err);
    else console.dir(result);
  });
});
