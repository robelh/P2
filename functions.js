//P2 req. 4-A

var isArmstrong = function (arm){
	var result = 0, robelH;
	robelH = String(arm);
	for(var i = 0; i < robelH.length; i++) {
		result = result + Math.pow(parseInt(robelH[i]),robelH.length);
	}

	if(result == arm){
		return true;
	}
	else{
		return false;
	}
}



//P2 req. 4-B

var allArmstrongs = function() {
	result = "";
	
	for (var j = 1; j <= 99999; j++){

		if(isArmstrong(j)==true){
			result = result + j + " ";

		}
	}
	return result;	
};



//P2 req. 4-C

var allSubstrings1 = function(s) {
	var result = "";
	for(var i = 0; i < s.length;i++) {
		for(var j = i+1; j<=s.length; j++) {
			result = result + s.substring(i, j) + ", ";
		}
	}
	return result;
};


//P2 req. 4-D

var allSubstrings2 = function(s) {
	var result = [];
	for(var i = 0; i < s.length;i++) {
		for(var j=i+1; j<=s.length; j++) {
			result.push(s.substring(i, j));
		}
	}
	return result;
};



//P2 req. 4-E
var maxWord = function (s) {
    var anna = s.split(" ");
    var robelH = 0;
    var result = 0;
    for (var k = 0; k < anna.length; k++) {
        if (robelH < anna[k].length) {
            robelH = anna[k].length;
            result = anna[k];
        }
    }
    return result;
};
