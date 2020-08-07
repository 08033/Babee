var MongoClient = require("mongodb").MongoClient;
//var url = "mongodb://localhost:27017/Babee";
var url = "mongodb://localhost:27017/";

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

//define routes..
app.get("/", function (req, res) {
  //res.send("<html><body><h1>Hello World</h1></body></html>");
  res.sendFile("index.html", { root: __dirname });
});

app.get("/greetings", function (req, res) {
  res.send(
    `<html><body><h1>Welcome! Season greetings. Message: ${req.query.greet}, Culture: ${req.query.culture}</h1></body></html>`
  );
});

app.get("/action/:title/:points", function (req, res) {
  res.send(
    `<html><body><h1>Welcome! Action time. Action: ${req.params.title}, Points: ${req.params.points}</h1></body></html>`
  );
});

app.post("/action", function (req, res) {
  res.send(
    `<html><body><h1>Welcome! Action saved. Action: ${req.body.Title}, Points: ${req.body.Points}</h1></body></html>`
  );
});

app.get("/children", function (req, res) {
  MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, db) {
      if (err) throw err;
      var dbo = db.db("Babee");

      dbo
        .collection("child")
        .find({})
        .toArray(function (errs, result) {
          if (errs) throw errs;
          //console.log(result);
          // res.write(result);
          // res.send(result);
          // console.dir(result);
          db.close();
          return res.json(result);
          //return result;
          
        });
    }
  );
  // res.send(
  //   `<html><body><h1>Welcome! Season greetings. Message: ${req.query.greet}, Culture: ${req.query.culture}</h1></body></html>`
  // );
});

/*
app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});
*/

var server = app.listen(5000, function () {
  console.log("Node Express server is running");
});
