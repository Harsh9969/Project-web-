var express = require("express");
var fs = require("fs");
var sql = require("mysql");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const port = 2410;
const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "city",
});
db.connect((err) => {
  if (err) throw err;
  console.log("MySql Connected");
});
//var comm = [];

app.get("/getComments", function (req, res) {
    db.query('SELECT * from comments', (err, rows) => {
      if (err) throw err;
      let ans = {message:rows};
      //console.log(ans);
      res.send(ans); 
  })
});
app.post("/addComment", function (req, res) {
  let now = new Date();
  let name = req.body.name;
  let comment = req.body.comment;
  let img = req.body.img;
  let time = now.getFullYear() + "-" + (now.getMonth()+1) + "-" + now.getDate();
  let id = -1;
    db.query('SELECT * from comments', (err, rows) => {
      if (err) throw err;
      id = rows.length;
      comm = { id: id+1, name: name, comment: comment, image: img, time:time };
      db.query('INSERT INTO comments SET ?', comm, (err, rows) => {
        if (err)  throw err;
        
        res.send({ message: rows });

      })
  })

});

app.listen(port, () => console.log(`Node app listening on port ${port}!`));
