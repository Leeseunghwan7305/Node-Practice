const process = require("process");
setTimeout(() => {
  console.log("hello");
}, 0);

process.nextTick(() => {
  console.log("newtTick");
});
console.log("ㅋㅋ");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());
