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


function creatGreeting(greeting) {
	return function (name) {
		console.log(`${greeting}, ${name}`);
	}
}
var sayHi = creatGreeting(`hi`);
sayHi(`bob`);
var sayHello = creatGreeting(`Hello`);
sayHello(`Anna`);
console.log(sayHi);