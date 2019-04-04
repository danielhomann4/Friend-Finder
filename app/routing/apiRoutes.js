var friendsArray = require("../data/friends")

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendsArray);
    })

    app.post("/api/friends", function(req, res){
        friendsArray.push(req.body);
    })
}