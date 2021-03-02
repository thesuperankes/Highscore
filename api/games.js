const express = require('express');

let routes = express.Router();

routes.get('/Create',(req,res)=>{
    let response = {
        message: '',
        data:{}
    };
    res.send(response);
});

routes.get('/Update',(req,res)=>{
    let response = {
        message: '',
        data:{}
    };
    res.send(response);
});

routes.get('/Delete',(req,res)=>{
    let response = {
        message: '',
        data:{}
    };
    res.send(response);
});

routes.get('/GetByQuery',(req,res)=>{
    let response = {
        message: '',
        data:{}
    };
    res.send(response);
});

routes.get('/GetLastest',(req,res)=>{
    let response = {
        message: '',
        data:{}
    };
    res.send(response);
});

module.exports = routes;