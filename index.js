// const nodemailer = require("nodemailer");
// var express = require("express");
// var app = express();

// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "database.sqlite",
// });

// const Comments = sequelize.define(
//   "Comments",
//   {
//     content: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {}
// );

// (async () => {
//   await Comments.sync();
// })();

// app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// app.set("view engine", "ejs");

// app.get("/", async function (req, res) {
//   const comments = await Comments.findAll();
//   res.render("index", { comments: comments });
// });

// app.post("/create", async function (req, res) {
//   const { content } = req.body;
//   await Comments.create({ content: content });
//   res.redirect("/");
// });

// app.post("/update/:id", async function (req, res) {
//   const { content } = req.body;
//   const { id } = req.params;
//   await Comments.update(
//     { content: content },
//     {
//       where: {
//         id: id,
//       },
//     }
//   );
//   res.redirect("/");
// });

// app.post("/delete/:id", async function (req, res) {
//   const { id } = req.params;
//   await Comments.destroy({
//     where: {
//       id: id,
//     },
//   });
//   res.redirect("/");
// });

// app.listen(3000);
// console.log("Server is listening on port 3000");

// ///////////////////////////////////////////

// const now = new Date();
// const timeTo3 =
//   new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 35, 0) - now;
// if (timeTo3 > 0) {
//   setTimeout(function () {
//     console.log("되었습니다!");
//   }, timeTo3);
// }

const express = require("express"); // Express 모듈 불러오기
const app = express(); // Express 앱 생성

// GET 요청에 대한 라우팅
app.get("/", function (req, res) {
  res.send("Hello, world!"); // 응답으로 "Hello, world!" 문자열 전송
});

// 서버 시작
app.listen(3000, function () {
  console.log("Server is running on port 3000"); // 서버 시작 메시지 출력
});
