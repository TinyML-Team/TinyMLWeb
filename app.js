//require을 통해 node_modules에 있는 express를 가져올 수 있다.
const express = require("express");

//express의 반환값을 저장한다.
const app = express();

app.use('/static', express.static('public'));


app.get('/', function(req,res) {
  res.sendFile(__dirname + "/static/index.html")
})


//3000번 포트로 서버를 오픈한다.
app.listen(443, () => {
  console.log("Sever On");
})
