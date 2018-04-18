require("babel-register")({ presets: ["react"] });

const express = require("express");
const Component = require("./Component");
const React = require("react");
const ReactDomServer = require("react-dom/server");

const app = express();
app.use(express.static("public"));

app.get("/", function(req, res) {
  const html = "<h1>hi</h1>";
  res.send(html);
});

app.get("/Component", function(req, res) {
  const html = ReactDomServer.renderToString(React.createElement(Component));
  res.send(html);
});

const port = process.env.PORT || 3000;

app.listen(port, function(err) {
  if (err) {
    console.log(err);
    process.exit();
  }
  console.log(`http://localhost:${port}`);
});
