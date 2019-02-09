const fs = require("fs");
const path = require("path");


const signUp = (req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", function(data) {
      body += data;

    });

    req.on("end", function() {
      const user =  JSON.parse(body);
      const {name} = user
      fs.writeFile(
        path.join(__dirname, `../db/users/${name}.json`),
        body,
        error => {
          if (error) console.log(error);
          console.log("file is writed");
        }
      );

      res.writeHead(200, { "content-type": "aplication/json" });
      res.write(JSON.stringify({ status: "success", user }));
      res.end();
    });
  }
};

module.exports = signUp;
