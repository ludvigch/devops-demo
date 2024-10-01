const fs = require("fs");
const path = require("path");

const filePath = "../../public/app.js"

if (filePath){
  //const newFileContent = "// I don't like spoon!"

  const newFileContent = ' \n\
  const express = require("express");\n\
  const app = express();\n\
  const PORT = 1337;\n\
  \n\
  app.get("/", (req, res) => {\n\
    res.send("Chopsticks are better than spoons! 🥢");\n\
  });\n\
  \n\
  app.listen(PORT, ()=>{\n\
    console.log("I want chopsticks");\n\
  });'

  fs.writeFileSync(filePath, newFileContent, "utf-8");
} else {
  console.log("File not found :(")
}
