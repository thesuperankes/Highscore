const express = require('express');

let routes = express.Router();

routes.get('/Login',(req,res)=>{
    let response = {
        message: '',
        data:{}
    };
    res.send(response);
});

routes.get('/Register',(req,res)=>{
    let response = {
        message: '',
        data:{}
    };
    res.send(response);
});

routes.get('/Recover',(req,res)=>{
    let response = {
        message: '',
        data:{}
    };
    res.send(response);
});

module.exports = routes;