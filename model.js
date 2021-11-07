var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var NEWSAPI = require('newsapi');
var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyCkZ0zRdKzYP9PPL36mEoUsr7YPARyQ1vg",
    databaseURL: "https://nodetest-95f46.firebaseio.com",
};
firebase.initializeApp(config);
var newsapi = new NEWSAPI('620a0602eb5a4a05be03c5d6d4a25e10');
class Model {
    constructor() {
        this.newsGenerator = (category) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    newsapi.v2.topHeadlines({
                        q: '',
                        category: category,
                        language: 'en',
                        country: 'us'
                    }).then((response) => __awaiter(this, void 0, void 0, function* () {
                        resolve(response);
                    }));
                }
                catch (e) {
                    reject(e);
                }
            }));
        });
        this.searchNews = (query) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    newsapi.v2.everything({
                        q: query,
                        language: 'en',
                        sortBy: 'relevancy',
                    }).then(response => {
                        resolve(response);
                    });
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
        this.registerUser = (email, password) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    firebase.auth().createUserWithEmailAndPassword(email, password).then(function (response) {
                        var database = firebase.database().ref('user');
                        var user = database.push({
                            email: email,
                            uid: response.uid
                        });
                        resolve({ msg: "Registration succesful. Thanks for registering", status: true });
                    }).catch(function (error) {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorMessage);
                        console.log(errorCode);
                        resolve({ msg: errorMessage, status: false });
                    });
                }
                catch (e) {
                    reject(e);
                }
            }));
        });
        this.signInUser = (email, password) => __awaiter(this, void 0, void 0, function* () {
            console.log(email);
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                firebase.auth().signInWithEmailAndPassword(email, password).then(function (response) {
                    firebase.database().ref('/user/').orderByChild("email").equalTo(email).once('value').then(function (snapshot) {
                        var key;
                        snapshot.forEach(function (childSnapshot) {
                            key = childSnapshot.key;
                        });
                        console.log(snapshot.child(key).val());
                        resolve({ data: snapshot.child(key).val(), status: true });
                    });
                }).catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage);
                    console.log(errorCode);
                    resolve({ msg: errorMessage, status: false });
                });
            }));
        });
    }
}
module.exports = Model;
// export {};
//# sourceMappingURL=model.js.map