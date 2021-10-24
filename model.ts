import { resolve } from "dns";

var NEWSAPI=require('newsapi');
var firebase=require('firebase');
var config = {
    apiKey: "AIzaSyCkZ0zRdKzYP9PPL36mEoUsr7YPARyQ1vg",
    databaseURL: "https://nodetest-95f46.firebaseio.com",
  };
  firebase.initializeApp(config);
  var newsapi=new NEWSAPI('620a0602eb5a4a05be03c5d6d4a25e10')
class Model{
    newsGenerator=async(category)=>{
        return new Promise(async(resolve,reject)=>{
            try{
                newsapi.v2.topHeadlines({
                    q: '',
                    category:category,
                    language: 'en',
                    country: 'us'
                  }).then(async(response) => {
                   resolve(response);
                  });
            }catch(e){
                reject(e);
            }
        })
    }

    searchNews = async(query)=>{
        return new Promise(async(resolve,reject)=>{
            try{
            newsapi.v2.everything({
                q: query,
                language: 'en',
                sortBy: 'relevancy',
              }).then(response => {
                resolve(response);
              });
            }
            catch(err)
            {
                reject(err)
            }
        })
       
    }
    registerUser=async(email,password)=>{
        return new Promise(async(resolve,reject)=>{
            try{
                firebase.auth().createUserWithEmailAndPassword(email, password).then(function(response){
                    var database=firebase.database().ref('user');
                    var user=database.push({
                        email:email,
                        uid:response.uid
                    })
                    resolve({msg:"Registration succesful. Thanks for registering",status:true})
                }).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage);
                    console.log(errorCode);
                    // ...
                    resolve({msg:errorMessage,status:false});
                  });
                  
            }catch(e)
            {
                reject(e);
            }
           
        })
        
    }
    signInUser=async(email,password)=>{
        console.log(email);
        return new Promise(async(resolve,reject)=>{
            firebase.auth().signInWithEmailAndPassword(email,password).then(function(response){
                firebase.database().ref('/user/').orderByChild("email").equalTo(email).once('value').then(function(snapshot){
                    var key
                    snapshot.forEach(function (childSnapshot) {
                       key=childSnapshot.key;
                      });
                      console.log(snapshot.child(key).val())
                      resolve({data:snapshot.child(key).val(),status:true});
                });
            }).catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                console.log(errorCode);
                // ...
                resolve({msg:errorMessage,status:false});
            })
        });
    }
}
module.exports=Model;