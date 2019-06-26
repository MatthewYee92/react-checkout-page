const express = require("express");
const app = express();
const path = require("path");
// const db = require("../db/index");

// sending get request to server

app.use(express.static('public'))


app.get("/", (req, res) => {
  console.log("get success");

  db.connection.query("SELECT * FROM table", function(err, results) {
    if(err) return console.log(err)
    console.log(results[0].groceryitems);
    console.log('get connection working')
    res.send(results);
  });
});

app.post("/", (req, res) => {
  console.log("post success");
  db.connection.query("INSERT into items () VALUES ()", function(err, results) {
    if(err) return console.log(err)
    console.log('post connection working')
    res.send(results);
  });
});

app.use((err, req, res, next) => {
  console.log(err);
});

// setting the port
app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});