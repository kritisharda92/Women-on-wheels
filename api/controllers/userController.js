var mongoose = require('mongoose');
var User = mongoose.model('User');
var Sugg = mongoose.model('Suggestions');

var login = function (req,res) {
    console.log("Reached login!");
    User
        .find({
            email : req.body.email,
            password:req.body.password
        })
        .exec( function (err, docs) {
            if (err) {
                console.log("Error in finding the user");
                res
                    .status(500)
                    .json({"message": "Error occured in finding user!"})
            }
            else {
                if (docs && docs.length == 0) {
                    var jsonResponse = {"message":"TRY AGAIN! Wrong username or password."};
                    console.log("Wrong username or password");
                }
                else {
                    console.log(docs);
                    // var _name = docs.map(function(a){return a.name});
                    // var _email = docs.map(function(a){return a.email});
                    // var jsonResponse = { name : _name, email : _email };
                    docs[0]["password"]="***";
                    console.log("LOGGED IN!! user exists!");
                    console.log(docs[0]);
                }
                res
                    .status(400)
                    .json(docs[0])
            }
        })
};

var signUp = function (req,res) {
    console.log("Reached signup!");
    User
        .find({
            email : req.body.email
        })
        .exec(function (err, docs) {
            if(err){
                console.log("Error in find");
                res
                    .status(500)
                    .json({"message":"Error occured in find user!"})
            }
        else {
                console.log(docs);
                if(docs && docs.length==0){
                    console.log("new user");
                    User.create({
                        name : req.body.name,
                        email : req.body.email,
                        isExistingUser : true,
                        password : req.body.password

                    },function (err,user) {


                        if(err){
                            console.log("Error occurred in creation! "+ err);
                            res
                                .status(500)
                                .json({"message":"Cannot add the user details because Error occurred in creation!"});
                        }
                        else{
                            console.log("User Added!");
                            user["password"]="***";
                            res
                                .status(200)
                                .json(user);
                        }
                    });

                }
                else{
                    console.log("user exists!");
                    res
                        .status(400)
                        .json({"message":"This email already exists!"})

                }
        }
    })
};
module.exports.postLoginDetails = function (req,res) {
    console.log("Reached login post ");
    var isTrue = (req.body.isExistingUser.toLowerCase() === 'true');
    console.log(isTrue);
    if(isTrue)
        login(req,res);
    else signUp(req,res);
};


module.exports.getSuggestions = function (req,res) {

    console.log("Get suggestions for mood");

    //var userId = req.params.userID;
    var res_mood = req.params.mood;

    Sugg
        .find({mood:res_mood}) //mood.find().limit(25);
        .exec(function (err, docs) {
            var response = {
                "status": 200,
                "message": "Success in getting suggested places"
            };

            if (err) {
                console.log("Error in find");
                response.status = 500;
                response.message = {"message": "Error occurred in find"}
            }
            else if (!docs) {
                console.log("Record not found this mood");
                response.status = 404;
                response.message = {"message": "Places not found"}
            }
            else {
                console.log("Locations Found : ", docs);
                response.message=docs;
            }

            res
                .status(response.status)
                .json(response.message)
        })
};


module.exports.saveSuggestions = function (req,res) {

    console.log("Update fav place");

    var userId = req.params.userID;
    var city = req.params.city;

    User
        .find({name:userId}) //mood.find().limit(25);
        .update({$addToSet: { fav_place: city }})
        // update(
        //     {name: userId},
        //     {$addToSet: { fav_place: city } }
        // )
        .exec(function (err, docs) {

            var response = {
                "status": 200,
                "message": "Success in getting suggested places"
            };

            if (err) {
                console.log("Error in find");
                response.status = 500;
                response.message = {"message": "Error occurred in find"}
            }
            else if (!docs) {
                console.log("Record not found this mood");
                response.status = 404;
                response.message = {"message": "Places not found"}
            }
            else {
                console.log("Locations Found : ", docs);
                response.message=docs;
            }

            res
                .status(response.status)
                .json(response.message)
        })
};



module.exports.getLocations = function (req,res) {

    console.log("Get locations for suggested city");

    var userId = req.params.userID;
    var suggestedCity = req.params.suggestionID;

    User
        .find(suggestedCity)
        .exec(function (err, docs) {
            var response = {
                "status": 200,
                "message": docs
            };

            if (err) {
                console.log("Error in find");
                response.status = 500;
                response.message = {"message": "Error occurred in find"}
            }
            else if (!docs) {
                console.log("Record not found this mood");
                response.status = 404;
                response.message = {"message": "Places not found"}
            }
            else {
                console.log("Locations Found : ", docs);
            }

            res
                .status(response.status)
                .json(response.message)
        });
};