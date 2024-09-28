const express = require("express");
const malicious = require("malicious_network");
const app = express();
const PORT = 1337;

app.get("/", (req, res) => {
  res.send("I like spoons 🥄🥄🥄");
});

app.listen(PORT, ()=>{
  console.log("^w^");
});
