"use strict";

const express = require('express'); // 모듈
const app = express();
const home = require("./src/routes/home") // 라우팅 - src폴더 속으로 넣었으면 추가


// 엡 셋팅 - src폴더 만들면, 앞에 추가 해줌
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home) //루트로 들어오면 home으러 보냄


module.exports = app;

// src폴더 안에 모두 넣었늘 경우 PS D:\node-login\src> npm start

//PS D:\node-login> git add .
//PS D:\node-login> git status
//PS D:\node-login> git remote add origin https://github.com/syngyang/node-login.git
//PS D:\node-login> git push origin master
// github에서 라이센스파일 만든 후
//PS D:\node-login> git pull origin master

// 소스코드를 src 폴더 안에 넣고
// PS D:\node-login> git add .
// PS D:\node-login> git commit -m "소스코드를 src 안으로 넣음"
// PS D:\node-login> git push origin master