console.log("logging...");
console.clear();

console.log("log");
console.info("info");
console.warn("warn");
console.error("error");

console.assert(2 === 3, "not same!");

const student = { name: "ellie", age: 20 };
console.log(student);
console.table(student);
console.dir(student);
let arr = [1, 2, 3];
console.table(arr);

console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

function a() {
  console.count("a function");
}
a();
console.countReset("a function");
a();
