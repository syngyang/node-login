"use strict"

const UserStorage = require("./UserStorage")

class User {
    constructor(body){
        this.body = body;
    }
    loginUser() {
        // const body = this.body;
        const {id, passwd} = UserStorage.getUserInfo(this.body.id);
        // console.log(id,passwd)
        if (id) {
            if (id ===this.body.id && passwd === this.body.passwd){
                return {success: true}
            }
            return { success: false, msg: "비밀번호가 틀렸습니다."}
        }
        return { success: false, msg: "존재하지 않는 아이디입니다."}
    }
}

module.exports = User;