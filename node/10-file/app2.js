const fs = require("fs").promises;

fs.readFile("./text-new.txt", "utf8")
  .then((data) => console.log(data))
  .catch(console.error);

fs.writeFile("./file.txt", "hello.seung hwan")
  .catch(console.error)
  .then(() => {
    fs.appendFile("./file.txt", "!!hello.seung hwan")
      .then(() => {
        fs.appendFile("./file.txt", "!!hello.seung hwan").catch(console.error);
      })
      .then(() => {
        fs.copyFile("./file.txt", "./file2.txt").catch(console.error);
      })
      .catch(console.error);
  });

fs.mkdir("sub-folder").catch(console.error);

fs.readdir("./").then(console.log).catch(console.log);
//인자는 어떤것들이 있는지 옵션은 뭐가 있는지 리턴되는값은 무엇인지 + catch이용 에러 잡기