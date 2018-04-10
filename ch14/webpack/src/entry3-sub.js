document.write(require("./entry3-sub2.js"));

module.exports.add = function(a,b){
	return a+b;
}

module.exports.sub = function(a,b){
	return a-b;
}