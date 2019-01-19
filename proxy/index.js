const express = require("express");
const proxy = require("http-proxy-middleware");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/:id", express.static(path.join(__dirname, "../views")));

app.use(
  "/api/carousel",
  proxy({ target: "http://18.188.188.228:3010/" })
);

app.use(
  "/api/details",
  proxy({ target: "http://ec2-18-188-219-64.us-east-2.compute.amazonaws.com/" })
);
app.use(
  "/api/similarlistings",
  proxy({ target: "http://54.82.218.221/" })
);

app.listen(3000, () => console.log("Proxy Server Working!!!"));
