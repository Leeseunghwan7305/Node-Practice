const jwt = require("jsonwebtoken");

const token = jwt.sign(
  {
    id: "userId",
    isAdmin: true,
  },
  "asdsa23"
);

console.log(token);
