const figlet = require("figlet");

figlet("intocode", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    return;
  }
  console.log(data);
});
