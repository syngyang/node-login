"use strict"

const fs = require("fs").promises

class UserStorage {
    // static #users = {
    //     id: ["yang","syng","wook"],
    //     passwd: ["123","234","345"],
    //     email: ["yang@gmail.com","syng@gmail.com","wook@gmail.com"]
    // };
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);// [id,passwd,name]
        const userInfo = usersKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo; 
    }

    static getUsers(...args){
        // const users = this.#users;
        const newUsers = args.reduce((newUsers, arg)=> {
            // console.log(newUsers, arg)
            if(users.hasOwnProperty(arg)){
                newUsers[arg] = users[arg]
            }
            return newUsers; // 반복해서 newUsers에 들어감
        },{});
        //console.log(newUsers)
        return newUsers;
    }
    static getUserInfo(id){
        // const users = this.#users;
        //현재 fs의 경로 "./"는 app.js가 있는 곳
        // console.log(fs.readFile("./src/DB/users.json"))
        return fs.readFile("./src/DB/users.json")
                .then(data=> {
                    return this.#getUserInfo(data, id); // 은익한 함수는 위로 올림
                })
                .catch(console.error) //.catch(err=> console.error(err))
    }

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id)
        users.email.push(userInfo.email)
        users.passwd.push(userInfo.passwd)
        return {success: true}
    }
}

module.exports = UserStorage;

// static 처리하여 클래스(UserStorage)를 이용하여 변수 접근
// # 을 붙여서 은익화, undefined
// UserStorage.getUsers("id","passwd") 부르면, args는 ['id','passwd']
