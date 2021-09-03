"use strict"

const home = (req, res)=> {
    // home앞에 "/" 쓰지말것
    res.render("home/index")
}

const login = (req, res)=> {
    res.render("home/login")
}

module.exports = {
    home:home,
    login:login
};