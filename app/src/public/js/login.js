"use strict"

const id = document.querySelector("#id");
const passwd = document.querySelector("#passwd");
const loginBtn = document.querySelector("button");

// 꼭 login.ejs의 script 연결에 defer 사용
// console.log(id.value,passwd, loginBtn);
loginBtn.addEventListener("click", login)

function login(){
    const req = {
        id:id.value,
        passwd:passwd.value,
    }
    //console.log(req)
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    }).then(res=>res.json())
      //.then(data=> console.log(data))
      .then(console.log(data))
    
}
