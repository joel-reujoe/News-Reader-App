var firebase=require('firebase');
var express=require('express');
var sql=require('mysql');
var fs=require('fs');
var bodyParser=require('body-parser');
var model=require('./model.js');
var model1=new model();

var app=express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',async(req,res)=>{
    console.log("hi");
    res.send("hi");
})
app.get('/login.html',async(req,res)=>{
    res.setHeader('content-type','text/html')    
    res.sendFile(__dirname+'/pages/login.html');
})
app.get('/register.html',async(req,res)=>{
    res.setHeader('content-type','text/html')    
    res.sendFile(__dirname+'/pages/register.html');
})
app.get('/index2.html',async(req,res)=>{
    res.setHeader('content-type','text/html')    
    res.sendFile(__dirname+'/pages/index2.html');
})
app.get('/general.js',async(req,res)=>{
    res.setHeader('content-type','text/javascript')
    res.sendFile(__dirname+'/general.js');
})
app.post('/registerUser',async(req,res)=>{
    //console.log(req.body);
    var data=await model1.registerUser(req.body.uname,req.body.email,req.body.password);
    res.send(data)
})
app.post('/signIn',async(req,res)=>{
    var data=await model1.signInUser(req.body.email,req.body.password)
    //console.log(data);
    res.send(data)
})
app.post('/newsGenerator',async(req,res)=>{
    var data=await model1.newsGenerator(req.body.category);
    res.send(data)
})
var port=process.env.PORT||8000;
app.listen(port,()=>{
    console.log('Server Started at '+port);
})
