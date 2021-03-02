const express = require('express');

let routes = express.Router();

routes.get('/Create',(req,res)=>{
    let response = {
        message: '',
        data:{}
    };
    res.send(message);
});

routes.get('/Update',(req,res)=>{
    let response = {
        message: '',
        data:{}
    };
    res.send(message);
});

routes.get('/Delete',(req,res)=>{
    let response = {
        message: '',
        data:{}
    };
    res.send(message);
});

routes.get('/GetByQuery',(req,res)=>{
    let response = {
        message: '',
        data:{}
    };
    res.send(message);
});

routes.get('/GetLastest',(req,res)=>{
    let response = {
        message: '',
        data:{}
    };
    res.send(message);
});

module.exports = routes;