//require을 통해 node_modules에 있는 express를 가져올 수 있다.
const express = require("express");

//express의 반환값을 저장한다.
const app = express();


app.get("/", (req, res) => {
  res.send("스마트 해상물류-TinyML Team Blog");
});

//3000번 포트로 서버를 오픈한다.
app.listen(3000, () => {
  console.log("Sever On");
})
