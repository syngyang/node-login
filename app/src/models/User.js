"use strict"

const UserStorage = require("./UserStorage")

class User {
    constructor(body){
        this.body = body;
    }
    async loginUser() {
        // const body = this.body;
        // const {id, passwd} = UserStorage.getUserInfo(this.body.id);
        // console.log(id,passwd)
        // console.log(await UserStorage.getUserInfo(this.body.id));
        try {
            const {id, passwd} = await UserStorage.getUserInfo(this.body.id)
            if (id) {
                if (id ===this.body.id && passwd === this.body.passwd){
                return {success: true}
                }
                return { success: false, msg: "비밀번호가 틀렸습니다."}
            }
            return { success: false, msg: "존재하지 않는 아이디입니다."}
        } catch (err) {
            return {success:false, msg:err}
        }
        
    }
    async register(){
        try {
            const response = await UserStorage.save(this.body)
            return response;
        } catch (err) {
            return {success: false, msg:err}
        }
        
    }
}

module.exports = User;