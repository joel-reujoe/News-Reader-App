var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var firebase = require('firebase');
var express = require('express');
var sql = require('mysql');
var fs = require('fs');
var bodyParser = require('body-parser');
var model = require('./model.js');
var model1 = new model();
var app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log("hi");
    res.send("hi");
}));
app.get('/login.html', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/html');
    res.sendFile(__dirname + '/pages/login.html');
}));
app.get('/register.html', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/html');
    res.sendFile(__dirname + '/pages/register.html');
}));
app.get('/index2.html', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/html');
    res.sendFile(__dirname + '/pages/index2.html');
}));
app.get('/css/bootstrap.min.css', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/css');
    res.sendFile(__dirname + '/pages/css/bootstrap.min.css');
}));
app.get('/css/font-awesome.min.css', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/css');
    res.sendFile(__dirname + '/pages/css/font-awesome.min.css');
}));
app.get('/css/ionicons.min.css', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/css');
    res.sendFile(__dirname + '/pages/css/ionicons.min.css');
}));
app.get('/css/AdminLTE.min.css', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/css');
    res.sendFile(__dirname + '/pages/css/AdminLTE.min.css');
}));
app.get('/css/blue.css', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/css');
    res.sendFile(__dirname + '/pages/css/blue.css');
}));
app.get('/logo-1.png', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/html');
    res.sendFile(__dirname + '/pages/logo-1.png');
}));
app.get('/jquery.min.js', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/html');
    res.sendFile(__dirname + '/pages/js/jquery.min.js');
}));
app.get('/bootstrap.min.js', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/html');
    res.sendFile(__dirname + '/pages/js/bootstrap.min.js');
}));
app.get('/icheck.min.js', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/html');
    res.sendFile(__dirname + '/pages/js/icheck.min.js');
}));
app.get('/fastclick.js', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/html');
    res.sendFile(__dirname + '/pages/js/fastclick.js');
}));
app.get('/adminlte.min.js', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/html');
    res.sendFile(__dirname + '/pages/js/adminlte.min.js');
}));
app.get('/jquery.sparkline.min.js', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/html');
    res.sendFile(__dirname + '/pages/js/jquery.sparkline.min.js');
}));
app.get('/jquery-jvectormap-1.2.2.min.js', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/html');
    res.sendFile(__dirname + '/pages/js/jquery-jvectormap-1.2.2.min.js');
}));
app.get('/jquery-jvectormap-world-mill-en.js', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/html');
    res.sendFile(__dirname + '/pages/js/jquery-jvectormap-world-mill-en.js');
}));
app.get('/jquery.slimscroll.min.js', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/html');
    res.sendFile(__dirname + '/pages/js/jquery.slimscroll.min.js');
}));
app.get('/general.js', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('content-type', 'text/javascript');
    res.sendFile(__dirname + '/general.js');
}));
app.post('/registerUser', (req, res) => __awaiter(this, void 0, void 0, function* () {
    var data = yield model1.registerUser(req.body.uname, req.body.email, req.body.password);
    res.send(data);
}));
app.post('/signIn', (req, res) => __awaiter(this, void 0, void 0, function* () {
    var data = yield model1.signInUser(req.body.email, req.body.password);
    res.send(data);
}));
app.post('/newsGenerator', (req, res) => __awaiter(this, void 0, void 0, function* () {
    var data = yield model1.newsGenerator(req.body.category);
    res.send(data);
}));
var port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('Server Started at ' + port);
});
//# sourceMappingURL=controller.js.map