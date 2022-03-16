const express = require ("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const articles = require("./dummydata/articles");
const article = require("./dummydata/articles")
const server = express();

server.get('/',(req,res)=>{
    res.send("API is running")
})

server.get('/api/articles',(req,res)=>{
    res.json(articles);
});
server.get('/api/articles/:id',(req,res)=>{
    const article = articles.find((n) => n._id === req.params.id);
    res.send(articles);
    console.log(req.params);
});

const dotenv = require("dotenv");
dotenv.config();
const PORT =process.env || 5000;

server.listen(PORT,console.log('server is working and listing on PORT $(PORT)'));