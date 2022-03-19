const fs = require("fs");

const readStream = fs.createReadStream("./file.txt", {
  highWaterMark: 64,
  encoding: "utf-8",
});
const data = [];
readStream.on("data", (chunk) => {
  data.push(chunk);
});
readStream.on("error", (error) => console.log(error));
readStream.on("end", () => {
  console.log(data.join(""));
});
