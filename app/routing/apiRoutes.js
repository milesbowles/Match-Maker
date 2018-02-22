// Dependencies
var friends = require("../data/friends");
var express = require("express");
var path = require("path");
var router = express.Router();


// Find best friend match
function findMatch(userScores) {
    // Keeps tracks of lowest difference
    var lowestDif;
    // Keeps track of the best match
    var bestMatch = 0; 
    // Keeps track of the index for the current friend comparison
    var currentFriend = 0;

    // Loop through friends list
    friends.forEach(friend => {
        // Store total difference
        var totalDif = 0;
        // Set starting index of user score array
        var i = 0; 
        // Compare scores
        friend.scores.forEach(score => {
            totalDif += Math.abs(score - userScores[i]);
            i++;
        });
        // Update best match if applicable
        // NOTE: If there are more than one best match, the first best match will be used
        if (totalDif < lowestDif || lowestDif == null) {
            // Set new lowest difference
            lowestDif = totalDif;
            // Set new best match
            bestMatch = currentFriend;
        };
        currentFriend++
    });
    // Returns friend that is the best match
    return friends[bestMatch];
}


// Gets all friends
router.get("/api/friends", function(req, res){
	// Send JSON with all friends
    res.json(friends);

});


// Sends back friend match
router.post("/api/friends", function(req, res){

    var name = req.body.name;
    var picture = req.body.picture;
    var answers = req.body['answers[]'];
    // Find match
    var match = findMatch(answers);
    //console.log(match);
    // Send back match
    res.send(match);
});


/** Export the router */
module.exports = router;