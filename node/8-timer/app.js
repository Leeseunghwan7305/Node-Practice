let num = 1;
const interval = setInterval(() => {
  console.log(num++);
}, 1000);

setTimeout(() => {
  console.log("time out!");
  clearInterval(interval);
}, 6000);

console.time("start!");
setTimeout(() => {
  console.log("setTimeout 0");
  console.timeEnd("start!");
}, 0);
