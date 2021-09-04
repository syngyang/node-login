"use strict"

class UserStorage {
    static #users = {
        id: ["yang","syng","wook"],
        passwd: ["123","234","345"],
        name: ["양","승","욱"]
    };
    static getUsers(...args){
        const users = this.#users;
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
    
}

module.exports = UserStorage;

// static 처리하여 클래스(UserStorage)를 이용하여 변수 접근
// # 을 붙여서 은익화, undefined
// UserStorage.getUsers("id","passwd") 부르면, args는 ['id','passwd']
