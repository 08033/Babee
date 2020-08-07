var http = require("http");
// var url = require("url");

const mssql = require("msnodesqlv8");
// const mssql = require("mssql");
 const connectionString =
   "server=.;Database=POS;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

const query = "SELECT * FROM brand";
// const query = "exec spGetPOSMenu 0";

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.write(req.url);
    // res.end('Hello World! Node v12');
    // var q = url.parse(req.url, true).query;
    // var txt = q.year + " " + q.month;

    var txt;
    mssql.query(connectionString, query, (err, rows) => {
      //console.dir(rows);
      console.log(rows);
      txt = rows;
      // res.write(rows);
    });

    res.end();
  })
  .listen(8080);

// mssql
//   .connect('Server=rizvi;Initial Catalog=POS;Integrated Security=True;Connection Timeout=30;')
//   .then(() => {
//     return mssql.query`select * from Brand`;
//   })
//   .then((result) => {
//     console.dir(result);
//   })
//   .catch((err) => {
//     console.log(`Error on sql connect`);
//     console.log(err);
//   });

// mssql.on("error", (err) => {
//   console.log(`mssql error:` + err);
// });
