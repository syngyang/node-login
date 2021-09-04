"use strict"
const User = require("../../models/User")

const show = {
    home:(req, res)=> {
             res.render("pages/index")// home앞에 "/" 쓰지말것
         },
    login:(req, res)=> {
             res.render("pages/login")
           }
}

const process = {
    login: (req,res)=> {
        const user = new User(req.body);
        // console.log(user.body.passwd)
        const response = user.loginUser()
        return res.json(response)// 클라이언트, 즉 login.js의 fetch의 then 에 던져 줌
    }
}

module.exports = {
    show,
    process
};

// const home = (req, res)=> {
//     // home앞에 "/" 쓰지말것
//     res.render("home/index")
// }
// const login = (req, res)=> {
//     res.render("home/login")
// }

// module.exports = {
    // home:home,
    // login:login
// };

// const User = require("../../models/UserStorage")
// const id = req.body.id, 
            //  passwd = req.body.passwd;
// // const userStorage = new UserStorage(); 인스탄스화 안하고, 바로 static
// const users = UserStorage.getUsers("id","passwd")

// const response = {}
// if(users.id.includes(id)) {
//     const idx = users.id.indexOf(id);
//     if (users.passwd[idx]=== passwd) {
//         response.success= true;
//         return res.json(response)
//     }
// }
// response.success = false;
// response.msg = "로그인에 실패 했습니다."
// return res.json(response)