const express = require("express");
const app = express();
const PORT = 1337;

app.get("/", (req, res) => {
  res.send("I hate spoons 🥄🥄🥄");
});

app.listen(PORT, ()=>{
  console.log("^w^");
});
