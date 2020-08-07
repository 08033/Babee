var MongoClient = require("mongodb").MongoClient;
//var url = "mongodb://localhost:27017/Babee";
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("Babee");
  //   dbo.createCollection("child", function (err, res) {
  //     if (err) throw err;
  //     console.log("Child collection created!");
  //     db.close();
  //   });
  var myobj = {
    _id: 1,
    FirstName: "Jason",
    LastName: "DSouza",
    IsFemale: false,
    DOB: "2010-05-09",
    RegDate: "2020-07-23",
  };

//   dbo.collection("child").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });

var myobj = [
    {
        _id: 2,
        FirstName: "Tahira",
        LastName: "Rizvi",
        IsFemale: true,
        DOB: "2018-11-22",
        RegDate: "2020-07-23",
      },
      {
        _id: 3,
        FirstName: "Majeed",
        LastName: "Rehman",
        IsFemale: false,
        DOB: "2001-08-08",
        RegDate: "2020-07-23",
      },
      {
        _id: 4,
        FirstName: "Bano",
        LastName: "Abbas",
        IsFemale: true,
        DOB: "2000-03-19",
        RegDate: "2020-07-23",
      }      
  ];

// dbo.collection("child").insertMany(myobj, function (err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });


  dbo.collection("child").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });


  //var myquery = { address: /^O/ };
//   var myquery = {};
//   dbo.collection("child").deleteMany(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log(obj.result.n + " document(s) deleted");
//     db.close();
//   });

});
