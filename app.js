const express = require("express");

const app = express();
const port = 3000;
const goodsRouter = require("./routes/goods.js");

app.use(express.json());

//이 구문을 홈페이지에 안녕하세요 홈페이지입니다를 띄우는 코드다. app은 express로 상수? 설정되었고 그 익스프레스는 서버를 킬 때 get으로 정보를 받아오는 요청을 받는다.
// 그러면 res.send가 그 코드를  읽으면서 응답으로 "안녕하세요 홈페이지입니다"라는 문구를 응답하게 되는 것이다. 그래서 화살표 함수안에 먼저 요청을 적고 뒤이어 우리가 받을 응답을 적는것이다.

app.get("/", (req, res) => {
  res.send("안녕하세요 홈페이지입니다.");
});

app.use("/api", goodsRouter);

app.listen(port, () => {
  console.log(port, "서버 연결중");
});
