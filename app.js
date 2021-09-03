"use strict";

const express = require('express'); // 모듈
const app = express();
const home = require("./routes/home") // 라우팅


// 엡 셋팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home) //루트로 들어오면 home으러 보냄


module.exports = app;