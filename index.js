// add solution here
function theBeatlesPlay(musicians, instruments) {
	var whoPlaysWhat = [];
	for(var i = 0; i < musicians.length; i++) {
		var currentString = musicians[i] + " plays " + instruments[i];
		whoPlaysWhat.push(currentString);
	}
	return whoPlaysWhat;
}

function johnLennonFacts(facts) {
	var newFacts = [];
	var i = 0;
	while(i < facts.length) {
		var newFact = facts[i] + "!!!";
		newFacts.push(newFact);
		i++;
	}
	return newFacts;
}
