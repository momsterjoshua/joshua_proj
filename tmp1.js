//function sayName(name)
//{
//    alert(name);
//}
//sayName("Josh"); 
//sayName(333); 

//var result = 0;
//function sayHello(name) {
// var greeting = "hello, " +name;
//alert(greeting);
//   }
//sayName("bob");

//var result = 0;
//function add(number)  {
//  result += number;
//}
//add(5);
//add(15);
//console.log(result);

//var result = 0;
//function add(number)  {
//var result = 0;
//    result += number;
//}
//add(5);
//add(15);
//console.log(result);

//function greet (who, text) {
//    who = ", " + who + "!";
//    alert(text + who);
//}
//var who = "Josh";
//greet(who, "hello");
//alert(who);

//function sum (a, b) {
//    return a+b;
//}
//var result1 = sum(10,2);
//var result2 = sum("10","2");
//console.log(result1, result2);

//function cAge(age) {
// return  (age < 18) ? false : "nnn"
//}
//
//var result = cAge(prompt("ваш возраст?"))
//console.log(age);

//
//var min = [17, 4, 11];
//for (var i = 0; i > min; i++) {
//    if (min[i] < min[0])
//        {        
//        min[i] = min[0];
//    }
//}
//}
//alert(min[i]);

//function nimNum(a,b,c) {
// if (a<b && a<c)    {
//  return a;     
// }   
// else if (b<c && b<a) {
//  return b; 
// } else {
//  return c;
// }   
//}
//var res = nimNum(111,41,55);
//console.log(res);

//function pow(x, n) {
//    // if (n ===0) {   return =1 }
//    var result = x;
//    for (var i = 1; i < n; i++) {
//        result *= x;
//    }
//    return result; //return negative? 1/result : result;
//}
//var x = prompt("chislo");
//var n = prompt("stepen");
//console.log(pow(x, n));

//function argsTest () {
//    console.log(arguments.length);
//    console.log(arguments[0]);
//    }
//argsTest("app",42, true, {a:5});

//
//function min() {
//    for (var i=1, min=arguments, i<arg)

//function greet(hi, name) {
//    if (arguments.lenght < 2) {
//        return "no info"
//    }
//    hi = hi || "hi"; // null/0/false
//    name = name || "stranger";
//    return hi + "," + name;
//}
//var res1 = greet("good day", "bob");
//var res2 = greet(null, "josh");
//var res3 = greet("hello", null);
//var res4 = greet("f");
//console.log(res1);
//console.log(res2);
//console.log(res3);
//console.log(res4);

//var a = {
//    first: 1
//}
//
//function changeObj(obj) {
//    obj.second = 5;
//}
//console.log(a);
//changeObj(a);
//console.log(a);

//
//var arr = [1, 2, 3, 4, 5];
//
//function changeObj(obj) {
//    arr.push("new");
//}
//console.log(arr);
//changeObj(arr);
//changeObj(arr);
//console.log(arr);


//var arr = [1, 2, 3, 4]
//
//function my(arr) {
//    for (var i = 1; i < arguments.length; i++)
//        arr.push(arguments[i]);
//}
//
//console.log(arr);
//my(arr, 1, 2, 5, 6, 9, "dfw", "d")
//console.log(arr);

//var arr = [1, 2, 3, 4, -4, -7];
//var a = {
//    odd: [],
//    even: []
//}
//
//function ff(arr) {
//    for (var i = 0; i < arr.length; i++)
//        if (arr[i] % 2 === 0) {
//            a.even.push(arr[i]);
//        } else {
//            a.odd.push(arr[i]);
//        }
//}
//ff(arr);
//console.log(a.odd);
//console.log(a.even);

//var arr = [1, 2, 3, 4, -4, -7];
//
//function ff(arr) {
//    var a = {
//        odd: [],
//        even: []
//    }
//    for (var i = 0; i < arr.length; i++) {
//        (arr[i] % 2) ?
//        a.even.push(arr[i]):
//            a.odd.push(arr[i])
//    }
//    return a
//}
//console.log(ff(arr));

//function kub(x) {     //вычисление невидимых кубиков рубика
//    return (x < 2) ?
//        0 :
//        Math.pow(x - 2, 3);
//}
//var res = kub(3);
//
//console.log(res);

//console.log(a);
//console.log(test);
//
//var a = 5;
//
//function test() {
//    console.log("funkt");
//}

//var a = `my 
//
//string`;
//var b = a + ' longer';
//console.log(b);

//var a = 42;
//var b = 2;
//var c = 11;
//
//function div(a, b) {
//    return a / b;
//}

//var str = `result is ${a} by ${b} is ${a/b} hmmmm 
//fun ${div(a,b)}`;
//var str = `the term is \\"fds"\\`
//var str = `the term is`
//
//console.log(str.length, str.charAt(5), str.charCodeAt(5));


//var arr1 = [1, 2, 3];
//var arr2 = [4, 5, 6];
//
//var str = `my string`;//var res = arr1.concat(arr2, [0, 0, 0])
//var res = str.indexOf(`i`);
//var res = str.slice(4, 7);
//var res = str.substr(4, 7); 
//var res = str.substring(4, 7);
//var res = str.split(`t`);
//console.log(res);

//var str = `my string`;
//var res = str.split(` `);
//a = res.length
//console.log(a);

//var str = `my string`;
//var res = str.split(` `); //что разделять
//var a = res.join(` - `); //что передавать когда склеятся в строку
//console.log(a);

//function count(string) {
//    return string.split(` `).length;
//}
//console.log(res.length);    \\ количество слов в массиве

//function reverseString(string) {
//    return string.split(``).reverse().join(``);
//}
// переворачивает предложение


//var str = `m3y str1ng para2m `;
//
//function reverseString(string) {
//
//    var arr = string.split(` `);
//    console.log(arr);
//    var reversed = arr.reverse();
//    console.log(reversed);
//    var joined = reversed.join(` `);
//    console.log(joined);
//
//}
//
//console.log(reverseString(str));




var str = `th2is i3s th1e st4ring`;
var a = new Array()
var a = []

function rString(str) {

    var arr = str.split(` `);
    arr.sort();
    console.log(arr);
    var joined = arr.join(` `);
    console.log(joined);
    a.arr.push(str);
}

console.log(rString(str));