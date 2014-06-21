var opensrt = require("./opensrt.js");
var token = "";
var zlib = require("zlib");

var query = {
	imdbid: "tt1844624", 
	season: "2", 
	episode: "3", 
	filename: "American.Horror.Story.S02E03.720p.HDTV.X264-DIMENSION"
}

opensrt.searchEpisode(query, function(err, res){
	if(err) return console.error("Error: "+ err);
	console.log(res);
	console.log(Object.keys(res).length);
})