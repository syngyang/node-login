"use strict"

const id = document.querySelector("#id");
const passwd = document.querySelector("#passwd");
const loginBtn = document.querySelector("#loginBtn");

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
      .then(data=>{ //{success: true}, {success: false, msg: "로그인에 실패했습니다."}
          if(data.success){
              location.href = "/"
          } else {
              alert(data.msg)
          }
      })
      .catch(err=>{
          console.error(new Error("로그인 중 에러 발생"))// router의 post지우고 테스트
      })
    
}
