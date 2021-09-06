"use strict"
// const fs = require("fs").promises
const db = require("../config/db")

class UserStorage {
    // static #users = {
    //     id: ["yang","syng","wook"],
    //     passwd: ["123","234","345"],
    //     email: ["yang@gmail.com","syng@gmail.com","wook@gmail.com"]
    // };
    static getUserInfo(id){
        return new Promise((resolve, reject)=> {
            const sql = "SELECT * FROM users WHERE id = ?;"
            db.query(sql, [id], (err, data)=>{
                if (err) reject(`${err}`); // 실제 production에서는 이런 에러표시 안됨
                resolve(data[0]); // 리스트[]로 감싸있으므로, RawDataPacket object만 필요하므로 "영"번째를 꺼냄
            });
        })
    }

    static async save(userInfo) {
        return new Promise((resolve, reject)=> {
            const sql = "INSERT INTO users(id, email,passwd) VALUES(?,?,?);"
            db.query(sql, [userInfo.id, userInfo.email, userInfo.passwd], (err)=>{
                if (err) reject(`${err}`);
                resolve({success:true}); 
            });
        })
    }
}

module.exports = UserStorage;

// static 처리하여 클래스(UserStorage)를 이용하여 변수 접근
// # 을 붙여서 은익화, undefined
// UserStorage.getUsers("id","passwd") 부르면, args는 ['id','passwd']

//파일로 쓸때는 필요없음
// static save(userInfo) {
//     // const users = this.#users;
//     users.id.push(userInfo.id)
//     users.email.push(userInfo.email)
//     users.passwd.push(userInfo.passwd)
//     return {success: true}
// }


// 외부 DB로 내용 변경 됨
// static #getUserInfo(data, id){
//     const users = JSON.parse(data);
//     const idx = users.id.indexOf(id);
//     const usersKeys = Object.keys(users);// [id,passwd,name]
//     const userInfo = usersKeys.reduce((newUser, info)=>{
//         newUser[info] = users[info][idx];
//         return newUser;
//     }, {});
//     return userInfo; 
// }

// static #getUsers(data,isAll, args){
//     const users = JSON.parse(data)
//     if (isAll) return users;
//     const newUsers = args.reduce((newUsers, arg)=> {
//         // console.log(newUsers, arg)
//         if(users.hasOwnProperty(arg)){
//             newUsers[arg] = users[arg]
//         }
//         return newUsers; // 반복해서 newUsers에 들어감
//     },{});
//     //console.log(newUsers)
//     return newUsers;
// }
// static getUsers(isAll,...args){
//     return fs.readFile("./src/DB/users.json")
//             .then(data=> {
//                 return this.#getUsers(data,isAll, args);
//             })
//             .catch(console.error) //.catch(err=> console.error(err))
// }
// static getUserInfo(id){
//     // const users = this.#users;
//     //현재 fs의 경로 "./"는 app.js가 있는 곳
//     // console.log(fs.readFile("./src/DB/users.json"))
//     return fs.readFile("./src/DB/users.json")
//             .then(data=> {
//                 return this.#getUserInfo(data, id); // 은익한 함수는 위로 올림
//             })
//             .catch(console.error) //.catch(err=> console.error(err))
// }

// static async save(userInfo) {
//     // const users = await this.getUsers("id","passwd","name")
//     const users = await this.getUsers(true) //모든 데이터를 받을 때
//     if(users.id.includes(userInfo.id)){
//         throw ("이미 존재하는 아이디 입니다.")
//     }
//     users.id.push(userInfo.id);
//     users.email.push(userInfo.email);
//     users.passwd.push(userInfo.passwd);
//     fs.writeFile("./src/DB/users.json", JSON.stringify(users));
//     return {success: true}
// }