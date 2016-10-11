//function multiply(num1, num2) {
//	var result = num1 * num2;
//
//	function logResult() {
//		console.log(result);
//	}
//	logResult();
//}
//var id = 1;
//
//function idGenerator() {
//
//	return function () {
//		return id++;
//	}
//}
//var nextId1 = idGenerator();
//var nextId2 = idGenerator();
//console.log(nextId1());
//console.log(nextId2());
//console.log(nextId1());
//console.log(nextId2());
//
//
//function creatGreeting(greeting) {
//	return function (name) {
//		console.log(`${greeting}, ${name}`);
//	}
//}
//var sayHi = creatGreeting(`hi`);
//sayHi(`bob`);
//var sayHello = creatGreeting(`Hello`);
//sayHello(`Anna`);
//

//var allFriends = [`Mike`, `Spike`, `Trike`, `Bike`];
//
//function greetFriends(friends, greet) {
//	for (var i = 0; i < friends.length; i++) {
//		greet(friends[i]);
//
//	}
//}
////
////function greet(friend) {
////	console.log(`Hello, ` + friend);
////}
//greetFriends(allFriends, function (friend) {
//	console.log(`Hi, ` + friend);
//});
function genericPoemMaker(name, gender) {
	console.log(name + ` finder`);
	console.log(`altruistic`);
	console.log(`style`);
	console.log(`A ` + gender + ` smile`);
}

function genericUserInput(firstName, lastName, gender, callback) {
	var name = firstName + " " + lastName;
	callback(name, gender);
}
var say = genericUserInput("Anna", "Zii", "GIRL", genericPoemMaker);