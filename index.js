const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, (err) => {
  if (err) console.error(err);
  console.log("Servidor rodando da porta 3000");
});
