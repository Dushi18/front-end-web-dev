const fs= require("fs");
// const { text } = require("stream/consumers");
let text = fs.readFileSync("text.txt", "utf-8");
// text= text.replace("Cricket", "Volleyball");
console.log("This is a text file");
console.log(text);

console.log("Creating a new file");
fs.writeFileSync("New.txt", text);


