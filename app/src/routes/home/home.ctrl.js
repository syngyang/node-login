"use strict"

const show = {
    home:(req, res)=> {
             res.render("home/index")// home앞에 "/" 쓰지말것
         },
    login:(req, res)=> {
             res.render("home/login")
           }
}
const users = {
    id: ["yang","syng","wook"],
    passwd: ["123","234","345"]
}

const process = {
    login: (req,res)=> {
        //console.log(req.body)
        const id = req.body.id, passwd = req.body.passwd;

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.passwd[idx]=== passwd) {
                return res.json({
                    success: true
                })
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패했습니다."
        })
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