const path = require("path");

console.log(__dirname);
console.log(__filename);

console.log(path.sep);//운영체제별로 표기법이 달라짐 path.sep 필수
console.log(path.delimiter);

console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

const parsed = path.parse(__filename);
console.log(parsed);

console.log(path.join(__dirname, "image"));
