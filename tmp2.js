//var arr = [0, 1, 22, 33, -43, 65, -87, 75, -9];
//var arr2 = [1, 4, 5, 7, 16, 54];
//var newArray = arr.filter(function (elem) {
//			return Math.sqrt(elem) === parseInt(Math.sqrt(elem));
//			var newArray = arr2.filter(function (elem) {
//				return Math.sqrt(elem) === parseInt(Math.sqrt(elem));
//
//			});
//
//			console.log(newArray);

//
//var arr = [1, 2, 3, 4];
//var newArray = arr.map(function (nunber) {
//	return Math.pow(nunber, 3);
//})
//
//var arr2 = [`this`, `is`, `my`, `exemple`, `array`];
//var newArray2 = arr2.map(function (word) {
//	return word.length;
//	return {
//		initialWord: word,
//		lenght: word.length
//	};
//});
//console.log(newArray);
//console.log(newArray2);


//var str = `London is the capital of Great Britain`;
//var str = str.split(" ");
//
//function UpperCase(s) {
//	for (i = 0; i < s.length(); i++)
//		if (str.isUpperCase(s.charAt(i))) return true;
//	return false;
//
//}
//console.log(UpperCase(str));
// ЧУШЬ


//
//var str = str.split(" ");
//var newStr = str.map(function (lgb) {
//	return lgb.index;
//
//
//	console.log(newStr);
//	console.log(str);
//
//});
//console.log(str);
//console.log(newStr);

//var arr = [0, 1, 22, 33, -43, 65, -87, 75, -9];
//var resultEvery = arr.every(function (num) {
//	return num > -10;
//});
//var resultSome = arr.some(function (num) {
//	return num < -920;
//
//});
//console.log(resultEvery, resultSome);



//var arr = [`apple`, `orange`, `banana`, `lemon`];
//arr.reduce(function (previos, current, i) {
//	console.log(i + `: `, previos, current);
//	return previos;
//});


//var arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//var result = arr2.reduce(function (previos, current, i) {
//	console.log(i + `: `, previos, current);
//	return previos + current;
//}, 10);
//console.log(result);


//var arr = [`one`, `two`, `three`];
//var result = arr.reduce(function (previos, current, i) {
//	console.log(i + `: `, previos, current);
//	return previos + current.split(``).reverse().join(``);
//}, ``);
//console.log(result);




//var arr = [32, 21, -4, 7, -2, 444, 11110];
//var result = arr.reduce(function (previos, current, i) {
//	if (previos > current) {
//		return previos
//	} else {
//		return current
//	}
//});
//console.log(result);


//var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//var result = arr.reduce(function (previos, current) {
//	return previos.concat(current);
//});
//console.log(result);

//
//var obj = {
//	value: 5,
//	sayHi: function () {
//		console.log(`hi`);
//	}
//};
//obj.sayHi();
//Math.random();
//
//
//var obj = {
//	value: 5,
//	sayHi: function () {
//		console.log(this.value);
//	},
//	anotherFunction() {
//
//	}
//};
//obj.sayHi();

//function Planet(name, water) {
//	this.name = name;
//	this.isWaterPresent = water;
//	this.radius = 1000;
//}
//var earth = new Planet(`Earth`, true);
//var mars = new Planet(`Mars`, false);
//
//Planet.prototype.form = `round`;
//Planet.prototype.isInhabitable = function () {
//	return this.isWaterPresent;
//}
//
//console.log(earth);
//console.log(earth.form);
//console.log(`water:`, earth.isInhabitable());
//console.log(mars);
//console.log(mars.isInhabitable());
//
//
//
//Object.prototype.sayHi = function () {
//	console.log(`hi`);
//}

//var a = {};
//var b = 5;
//a.sayHi();
//b.sayHi();
//
//var cat = {
//	name: `flll`
//};
//var myCat = {
//	breed: `bombay`
//};
//console.log(cat.breed);


var arr = [1, 2, 3];
var prot = Object.getPrototypeOf(arr);
console.log(prot);
var prot2 = Object.getPrototypeOf(prot)
console.log(prot2);