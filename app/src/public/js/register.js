"use strict"

const id = document.querySelector("#id");
const email = document.querySelector("#email");
const passwd = document.querySelector("#passwd");
const confirmedPasswd = document.querySelector("#confirmed-passwd");
const registerBtn = document.querySelector("#register-btn");

// 꼭 register.ejs의 script 연결에 defer 사용
// console.log(id.value,passwd, registerBtn);
registerBtn.addEventListener("click", register)

function register(){
    if(!id.value) return alert("아이디를 입력해주십시오")
    if (passwd.value !==confirmedPasswd.value){
        return alert("비밀번호가 일치하지 않습니다.")
    }
    const req = {
        id:id.value,
        email:email.value,
        passwd:passwd.value,
        // confirmedPasswd:confirmedPasswd.value,
    }
    //console.log(req)
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    }).then(res=>res.json())
      .then(data=>{ //{success: true}, {success: false, msg: "로그인에 실패했습니다."}
          if(data.success){
              location.href = "/login"
          } else {
              alert(data.msg)
          }
      })
      .catch(err=>{
          console.error(new Error("회원가입 중 에러 발생"))// router의 post지우고 테스트
      })
    
}
