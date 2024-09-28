const https = require("https");

https
  .get("https://attacker.com/", (res) => {
    if (res.statusCode < 200 || res.statusCode >= 300) {
      console.error("HTTP Error: " + res.statusCode);
      process.exit(1); // Exit with a failure code on HTTP error status
    }

    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log(data);
    });
  })
  .on("error", (err) => {
    console.error("Error: " + err.message);
    process.exit(1); // Exit with a failure code
  });
