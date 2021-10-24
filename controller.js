var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const model = require('./model.js');
const model1 = new model();
const bodyParser = require('body-parser');
let path = require('path');
var app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'frontend/build')));
app.post('/registerUser', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let data = yield model1.registerUser(req.body.email, req.body.password);
    res.send(data);
}));
app.post('/signIn', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let data = yield model1.signInUser(req.body.email, req.body.password);
    res.send(data);
}));
app.get('/newsGenerator', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let data = yield model1.newsGenerator(req.query.category);
    res.send(data);
}));
app.get('/searchNews', (req, res) => __awaiter(this, void 0, void 0, function* () {
    if (req.query.query === "") {
        let data = yield model1.newsGenerator('general');
        res.send(data);
    }
    else {
        let data = yield model1.searchNews(req.query.query);
        res.send(data);
    }
}));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend/build', 'index.html'));
});
let port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('Server Started at ' + port);
});
//# sourceMappingURL=controller.js.map