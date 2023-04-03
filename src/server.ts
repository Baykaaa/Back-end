import AuthRoute from "./auth/auth.route";
const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");

app.use(bodyParser());
app.use(cors());

app.use("/api", AuthRoute);

// app.post("/sign", (req:any, res:any) => {
//   console.log("ddddddd");
//   const connection = mysql.createConnection({
//     host: "54.169.69.87",
//     user: "rtd",
//     password: "Tiny722$",
//     database: "ulun_mn",
//   });

//   connection.connect();

//   connection.query(
//     "SELECT *FROM Users where username  = '" + req.body.username + "'",
//     (error :any, row:any, fields:any) => {
//       console.log(req.body.username);
//       res.send(row);
//     }
//   );
//   connection.end();
// });

app.listen(port, () => {
  console.log(`"Example app listening on port ${port}"`);
});
``;
