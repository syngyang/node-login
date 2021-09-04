"use strict"
const UserStorage = require("../../models/userStorage")

const show = {
    home:(req, res)=> {
             res.render("home/index")// home앞에 "/" 쓰지말것
         },
    login:(req, res)=> {
             res.render("home/login")
           }
}

const process = {
    login: (req,res)=> {
        //console.log(req.body)
        const id = req.body.id, 
            passwd = req.body.passwd;
        // const userStorage = new UserStorage(); 인스탄스화 안하고, 바로 static
        const users = UserStorage.getUsers("id","passwd")

        const response = {}
        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.passwd[idx]=== passwd) {
                response.success= true;
                return res.json(response)
            }
        }
        response.success = false;
        response.msg = "로그인에 실패 했습니다."
        return res.json(response)
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