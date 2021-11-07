const express=require('express');
const model=require('./model.js');
const model1=new model();
const bodyParser = require('body-parser');
let path = require('path')



var app=express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname, 'frontend-app/www')));


app.post('/registerUser',async(req,res)=>{
    let data=await model1.registerUser(req.body.email,req.body.password);
    res.send(data)
})
app.post('/signIn',async(req,res)=>{
    let data=await model1.signInUser(req.body.email,req.body.password)
    res.send(data)
})
app.get('/newsGenerator',async(req,res)=>{
    let data=await model1.newsGenerator(req.query.category);
    res.send(data)
})

app.get('/searchNews',async(req,res)=>{
    if(req.query.query === "")
    {
        let data=await model1.newsGenerator('general');
        res.send(data)
    }else{
        let data=await model1.searchNews(req.query.query);
        res.send(data)
    }
    
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend-app/www', 'index.html'));
});
let port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log('Server Started at '+port);
})
